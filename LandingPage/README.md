# 🚀 Vork Development - Landing Page

Proyecto completo de landing page para Vork Development con formulario de contacto integrado con envío de emails.

## 📁 Estructura del Proyecto

```
LandingPage/
├── vorkdevelopment/          # Frontend (React + Vite)
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   ├── vercel.json           # Configuración para Vercel
│   └── .env.example          # Variables de entorno
│
├── server/                   # Backend (Express + NodeMailer)
│   ├── server.js             # Servidor principal
│   ├── package.json
│   ├── vercel.json           # Configuración para Vercel
│   ├── .env                  # Configuración (no subir a Git)
│   └── .env.example          # Plantilla
│
└── DEPLOYMENT.md             # Guía completa de deployment
```

## 🚀 Inicio Rápido (Local)

### Frontend
```bash
cd vorkdevelopment
npm install
npm run dev
# Accede a http://localhost:5173
```

### Backend (en otra terminal)
```bash
cd server
npm install
npm run dev
# Servidor corriendo en http://localhost:3001
```

## ✨ Características

- ✅ Landing page moderna y responsive
- ✅ Formulario de contacto funcional
- ✅ Envío de emails con NodeMailer
- ✅ Diseño profesional con Tailwind CSS
- ✅ Listo para producción en Vercel
- ✅ CORS habilitado
- ✅ Validación de formularios

## 📧 Sistema de Contacto

El formulario envía:
- **Email al admin** con todos los detalles del contacto
- Diseño HTML profesional
- Información del cliente (nombre, email, empresa, tipo de proyecto)
- Mensaje completo

## 🌐 Variables de Entorno

### Frontend (`vorkdevelopment/.env`)
```
VITE_API_URL=http://localhost:3001
```

### Backend (`server/.env`)
```
EMAIL_USER=tu_email@gmail.com
EMAIL_PASS=contraseña_app
ADMIN_EMAIL=admin@example.com
PORT=3001
```

## 📚 Documentación

Ver [DEPLOYMENT.md](./DEPLOYMENT.md) para la guía completa de deployment en Vercel.

## 🔧 Tecnologías Usadas

### Frontend
- React 19
- Vite
- Tailwind CSS
- React Hooks

### Backend
- Express 4
- NodeMailer 6
- CORS
- dotenv

## 📝 Scripts Disponibles

### Frontend
```bash
npm run dev      # Desarrollo local
npm run build    # Build para producción
npm run preview  # Ver build en local
npm run lint     # Linter de código
```

### Backend
```bash
npm run dev      # Desarrollo con auto-reload
npm start        # Producción
```

## 🐛 Solución de Problemas

### Frontend no conecta al backend
- Verifica que el backend esté corriendo en puerto 3001
- Revisa la variable `VITE_API_URL` en `.env`

### Emails no se envían
- Verifica credenciales de Gmail
- Asegúrate de tener contraseña de app habilitada
- Revisa que `.env` del server tenga credenciales correctas

### Puerto 3001 ya en uso
```bash
# Cambiar puerto en server/.env
PORT=3002
```

## 📞 Soporte

Para más información o problemas, consulta [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**Hecho con ❤️ por Vork Development**
