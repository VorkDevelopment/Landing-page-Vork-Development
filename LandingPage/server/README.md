# 📧 Servidor Backend - Vork Development

Este servidor maneja el envío de correos electrónicos para el formulario de contacto usando **NodeMailer**.

## 🚀 Instalación y Configuración

### 1. Instalar Dependencias

Primero, instala las dependencias del servidor:

```bash
cd server
npm install
```

### 2. Configurar Variables de Entorno

Crea un archivo `.env` en la carpeta `server/` (cópialo de `.env.example`):

```bash
cp .env.example .env
```

Luego edita el archivo `.env` con tus credenciales:

```env
# Email Configuration
EMAIL_USER=tu_email@gmail.com
EMAIL_PASS=tu_contraseña_app
ADMIN_EMAIL=vork.development@gmail.com

# Server
PORT=3001
```

### 3. Configurar Gmail (Recomendado)

Si usas Gmail, sigue estos pasos:

1. Habilita la **Verificación en Dos Pasos** en tu cuenta de Google
2. Genera una **Contraseña de App** en https://myaccount.google.com/apppasswords
3. Usa esa contraseña en `EMAIL_PASS` en tu archivo `.env`

### 4. Iniciar el Servidor

```bash
# Desarrollo (con auto-reload)
npm run dev

# Producción
npm start
```

El servidor correrá en `http://localhost:3001`

## 📝 Funcionalidad

El servidor tiene los siguientes endpoints:

### POST `/api/contact`

Recibe los datos del formulario y envía dos emails:

1. **Email al cliente**: Confirmación de que recibimos su mensaje
2. **Email al admin**: Notificación interna del nuevo contacto

**Datos esperados:**
```json
{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "company": "Mi Empresa",
  "project": "web",
  "message": "Necesito desarrollar..."
}
```

### GET `/api/health`

Verifica que el servidor está activo.

## 🔐 Seguridad

- Las variables de entorno nunca se suben a Git
- La carpeta `server` tiene un `.gitignore` para no subir `node_modules` y `.env`
- Los correos se validan antes de ser enviados

## 🔧 Troubleshooting

### "Error de conexión"
- Asegúrate de que el servidor esté corriendo
- Verifica que el puerto 3001 esté disponible

### "Error al enviar email"
- Verifica tus credenciales de email en `.env`
- Si usas Gmail, asegúrate de haber generado una **Contraseña de App**
- Revisa la consola del servidor para más detalles

## 📦 Scripts Disponibles

- `npm run dev`: Inicia el servidor en modo desarrollo
- `npm start`: Inicia el servidor en modo producción

## 🚀 Próximas Mejoras

- [ ] Validación más robusta de emails
- [ ] Rate limiting para evitar spam
- [ ] Confirmar email antes de procesar
- [ ] Persistencia de contactos en base de datos
