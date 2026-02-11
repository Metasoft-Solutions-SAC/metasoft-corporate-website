/**
 * Vercel Serverless Function - Contact Form Proxy
 * 
 * Este endpoint actúa como proxy seguro entre el frontend y Web3Forms,
 * ocultando la API key del cliente y agregando rate limiting básico.
 * 
 * Configuración requerida en Vercel Dashboard:
 * - Environment Variable: WEB3FORMS_ACCESS_KEY
 * 
 * Para rate limiting avanzado, considera migrar a Edge Runtime con Upstash Redis.
 */

// Simple in-memory rate limiter (resets on function cold start)
// Para producción, usar Redis (Upstash) o similar
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hora en ms
const MAX_REQUESTS_PER_WINDOW = 5; // 5 requests por hora por IP

/**
 * Rate limiter básico en memoria
 * Limitación: Se resetea en cold starts (aceptable para MVP)
 */
function checkRateLimit(ip) {
    const now = Date.now();
    const userRequests = rateLimitMap.get(ip) || [];
    
    // Limpiar requests antiguos fuera de la ventana
    const recentRequests = userRequests.filter(
        timestamp => now - timestamp < RATE_LIMIT_WINDOW
    );
    
    // Verificar límite
    if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
        return {
            allowed: false,
            resetTime: Math.ceil((recentRequests[0] + RATE_LIMIT_WINDOW - now) / 1000 / 60) // minutos
        };
    }
    
    // Agregar request actual
    recentRequests.push(now);
    rateLimitMap.set(ip, recentRequests);
    
    return {
        allowed: true,
        remaining: MAX_REQUESTS_PER_WINDOW - recentRequests.length
    };
}

/**
 * Validar datos del formulario
 */
function validateFormData(data) {
    const errors = [];
    
    // Campos requeridos
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Name must be at least 2 characters');
    }
    
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.push('Invalid email address');
    }
    
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Message must be at least 10 characters');
    }
    
    // Validaciones de seguridad
    if (data.name && data.name.length > 100) {
        errors.push('Name too long');
    }
    
    if (data.message && data.message.length > 5000) {
        errors.push('Message too long');
    }
    
    return {
        valid: errors.length === 0,
        errors
    };
}

/**
 * Sanitizar datos para prevenir XSS
 */
function sanitizeString(str) {
    if (typeof str !== 'string') return '';
    return str
        .trim()
        .replace(/[<>]/g, '') // Remover < y >
        .substring(0, 5000); // Límite de caracteres
}

/**
 * Main handler
 */
export default async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    // Solo POST permitido
    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            message: 'Method not allowed. Use POST.'
        });
    }
    
    try {
        // Obtener IP del cliente (respeta proxies)
        const ip = req.headers['x-forwarded-for']?.split(',')[0].trim() 
                   || req.headers['x-real-ip'] 
                   || req.socket.remoteAddress 
                   || 'unknown';
        
        // Rate limiting check
        const rateLimit = checkRateLimit(ip);
        
        if (!rateLimit.allowed) {
            return res.status(429).json({
                success: false,
                message: `Too many requests. Please try again in ${rateLimit.resetTime} minutes.`,
                retryAfter: rateLimit.resetTime
            });
        }
        
        // Parsear body
        const formData = req.body;
        
        // Validar datos
        const validation = validateFormData(formData);
        if (!validation.valid) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: validation.errors
            });
        }
        
        // Verificar que existe la API key
        const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
        if (!accessKey) {
            console.error('WEB3FORMS_ACCESS_KEY not configured');
            return res.status(500).json({
                success: false,
                message: 'Server configuration error. Please contact support.'
            });
        }
        
        // Sanitizar datos
        const sanitizedData = {
            access_key: accessKey,
            name: sanitizeString(formData.name),
            from_name: sanitizeString(formData.name),
            email: sanitizeString(formData.email),
            from_email: sanitizeString(formData.email),
            replyto: sanitizeString(formData.email),
            company: sanitizeString(formData.company || 'No especificada'),
            phone: sanitizeString(formData.phone || 'No especificado'),
            message: sanitizeString(formData.message),
            subject: `Nuevo contacto desde la web: ${sanitizeString(formData.name)}`,
            
            // Metadata útil
            _source: 'metasoft.pe',
            _language: req.headers['accept-language']?.split(',')[0] || 'es',
            _timestamp: new Date().toISOString(),
            
            // Deshabilitar redirección (manejamos con JS)
            redirect: 'false'
        };
        
        // Enviar a Web3Forms
        const web3FormsResponse = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(sanitizedData)
        });
        
        const result = await web3FormsResponse.json();
        
        // Log success/failure (no incluir datos sensibles)
        if (result.success) {
            console.log(`✅ Contact form submitted successfully from IP: ${ip}`);
        } else {
            console.error(`❌ Web3Forms API error:`, result.message);
        }
        
        // Retornar respuesta al cliente
        return res.status(web3FormsResponse.ok ? 200 : 500).json({
            success: result.success,
            message: result.success 
                ? 'Message sent successfully!' 
                : 'Failed to send message. Please try again.',
            remaining: rateLimit.remaining - 1
        });
        
    } catch (error) {
        console.error('Contact form error:', error);
        
        return res.status(500).json({
            success: false,
            message: 'Internal server error. Please try again later.'
        });
    }
}
