import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configurar transporter de Nodemailer con Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Ruta para recibir el formulario de contacto
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, project, message } = req.body;

    // Validar datos
    if (!name || !email || !project || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Faltan campos requeridos' 
      });
    }

    // Email para el equipo (notificación interna)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `🚀 Nuevo contacto: ${name} - ${project}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; background-color: #f4f7fc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <div style="max-width: 650px; margin: 20px auto; background-color: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
              
              <!-- Header Gradient -->
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                <div style="font-size: 48px; margin-bottom: 15px;">📬</div>
                <h1 style="margin: 0; color: white; font-size: 28px; font-weight: 600;">Nuevo Contacto Recibido</h1>
                <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">Desde tu formulario de contacto</p>
              </div>

              <!-- Main Content -->
              <div style="padding: 40px 30px;">
                
                <!-- Alert Box -->
                <div style="background: #e8f4f8; border-left: 4px solid #667eea; padding: 16px; border-radius: 6px; margin-bottom: 30px;">
                  <p style="margin: 0; color: #2c3e50; font-size: 14px;">
                    <strong>⏰ Tiempo de recepción:</strong> ${new Date().toLocaleString('es-ES')}
                  </p>
                </div>

                <!-- Contact Information Card -->
                <div style="background: #f8fafb; border: 1px solid #e1e4e8; border-radius: 8px; padding: 24px; margin-bottom: 30px;">
                  <h2 style="margin: 0 0 20px 0; color: #2c3e50; font-size: 18px; font-weight: 600;">👤 Información del Contacto</h2>
                  
                  <div style="display: grid; gap: 16px;">
                    <!-- Nombre -->
                    <div>
                      <p style="margin: 0; color: #667eea; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Nombre</p>
                      <p style="margin: 6px 0 0 0; color: #2c3e50; font-size: 16px; font-weight: 500;">${name}</p>
                    </div>

                    <!-- Email -->
                    <div>
                      <p style="margin: 0; color: #667eea; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Correo Electrónico</p>
                      <p style="margin: 6px 0 0 0;">
                        <a href="mailto:${email}" style="color: #667eea; font-size: 16px; text-decoration: none; font-weight: 500;">${email}</a>
                      </p>
                    </div>

                    <!-- Empresa (si existe) -->
                    ${company ? `
                    <div>
                      <p style="margin: 0; color: #667eea; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Empresa</p>
                      <p style="margin: 6px 0 0 0; color: #2c3e50; font-size: 16px; font-weight: 500;">${company}</p>
                    </div>
                    ` : ''}

                    <!-- Tipo de Proyecto -->
                    <div>
                      <p style="margin: 0; color: #667eea; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Tipo de Proyecto</p>
                      <p style="margin: 6px 0 0 0;">
                        <span style="display: inline-block; background: #667eea; color: white; padding: 6px 14px; border-radius: 20px; font-size: 14px; font-weight: 500;">
                          ${project === 'web' ? '🌐 Desarrollo Web' : project === 'ecommerce' ? '🛍️ Ecommerce' : project === 'mobile' ? '📱 App Móvil' : '📋 ' + project}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Message Card -->
                <div style="background: #fafbfc; border: 1px solid #e1e4e8; border-radius: 8px; padding: 24px; margin-bottom: 30px;">
                  <h2 style="margin: 0 0 16px 0; color: #2c3e50; font-size: 18px; font-weight: 600;">💬 Mensaje</h2>
                  <div style="background: white; padding: 16px; border-radius: 6px; border-left: 3px solid #667eea;">
                    <p style="margin: 0; color: #2c3e50; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                  </div>
                </div>

                <!-- CTA Buttons -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 30px;">
                  <a href="mailto:${email}" style="display: block; background: #667eea; color: white; padding: 14px; border-radius: 6px; text-align: center; text-decoration: none; font-weight: 600; font-size: 14px; transition: background 0.3s;">
                    ✉️ Responder
                  </a>
                  <a href="https://vorkdevelopment.com" style="display: block; background: #764ba2; color: white; padding: 14px; border-radius: 6px; text-align: center; text-decoration: none; font-weight: 600; font-size: 14px; transition: background 0.3s;">
                    🌐 Ver Sitio
                  </a>
                </div>

              </div>

              <!-- Footer -->
              <div style="background: #f8fafb; padding: 24px 30px; border-top: 1px solid #e1e4e8; text-align: center;">
                <p style="margin: 0; color: #666; font-size: 13px;">
                  <strong>Vork Development</strong> • Soluciones de Desarrollo Web
                </p>
                <p style="margin: 8px 0 0 0; color: #999; font-size: 12px;">
                  Este es un mensaje automático de tu formulario de contacto
                </p>
                <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e1e4e8;">
                  <p style="margin: 0; color: #999; font-size: 11px;">
                    © 2026 Vork Development. Todos los derechos reservados.
                  </p>
                </div>
              </div>

            </div>
          </body>
        </html>
      `,
    };

    // Enviar solo el email al admin
    await transporter.sendMail(adminMailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Mensaje enviado correctamente' 
    });
  } catch (error) {
    console.error('Error al enviar email:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Error al enviar el mensaje. Por favor intenta más tarde.' 
    });
  }
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ 
    status: 'API Vork Development activa ✅',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      contact: 'POST /api/contact'
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'Servidor activo' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
