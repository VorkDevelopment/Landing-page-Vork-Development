# 🚀 Guía de Deployment en Vercel

Este proyecto consta de **2 aplicaciones independientes** que se despliegan por separado en Vercel:
1. **Frontend** (React + Vite)
2. **Backend** (Express + NodeMailer)

## 📋 Requisitos Previos

- Cuenta en [Vercel](https://vercel.com)
- Repositorio Git (GitHub, GitLab o Bitbucket)
- Variables de entorno configuradas

---

## 🎨 Deployment del Frontend

### 1. Subir a GitHub

```bash
cd vorkdevelopment
git add .
git commit -m "Frontend listo para Vercel"
git push origin main
```

### 2. Conectar en Vercel

1. Ve a [vercel.com](https://vercel.com) y login
2. Haz clic en **"Add New..."** → **"Project"**
3. Selecciona tu repositorio
4. **Nombre del proyecto:** `vork-development-frontend`
5. En **"Root Directory"**: Selecciona `LandingPage/vorkdevelopment`
6. Haz clic en **"Deploy"**

### 3. Configurar Variables de Entorno

Después del primer deploy (aunque falle), ve a:
- **Project Settings** → **Environment Variables**
- Agrega:
  ```
  VITE_API_URL=https://tu-backend-url.vercel.app
  ```
  (La URL exacta del backend la sabrás después de desplegarlo)

4. Redeploy el frontend

---

## ⚙️ Deployment del Backend

### 1. Subir a GitHub

```bash
cd server
git add .
git commit -m "Backend listo para Vercel"
git push origin main
```

### 2. Conectar en Vercel

1. Ve a [vercel.com](https://vercel.com) y login
2. Haz clic en **"Add New..."** → **"Project"**
3. Selecciona tu repositorio
4. **Nombre del proyecto:** `vork-development-backend`
5. En **"Root Directory"**: Selecciona `LandingPage/server`
6. Haz clic en **"Deploy"**

### 3. Configurar Variables de Entorno

Después del primer deploy, ve a:
- **Project Settings** → **Environment Variables**
- Agrega estas variables (cópialas del `.env` local):
  ```
  EMAIL_USER=vork.development@gmail.com
  EMAIL_PASS=mguemrfcpbtxyhmh
  ADMIN_EMAIL=vork.development@gmail.com
  ```

4. Redeploy el backend
5. **Copia la URL del backend** (aparece en la página de deployment)

### 4. Actualizar Frontend con URL del Backend

Vuelve al frontend en Vercel y actualiza:
- **Project Settings** → **Environment Variables**
- Modifica `VITE_API_URL` con la URL real del backend
- Redeploy

---

## 📝 URLs Finales

Una vez desplegados:
- **Frontend:** `https://vork-development-frontend.vercel.app`
- **Backend:** `https://vork-development-backend.vercel.app`

---

## 🔧 Estructura de Carpetas para Vercel

```
LandingPage/
├── vorkdevelopment/          # Frontend
│   ├── vercel.json           # Configuración Vercel
│   ├── .env.example          # Variables de ejemplo
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│
└── server/                   # Backend
    ├── vercel.json           # Configuración Vercel
    ├── .env                  # Variables (NO subir a Git)
    ├── .env.example          # Variables de ejemplo
    ├── package.json
    └── server.js
```

---

## ⚠️ Cosas Importantes

### No subir a Git:
- `.env` (archivos de configuración real)
- `node_modules/`

### Sí subir a Git:
- `.env.example` (plantilla de variables)
- `vercel.json` (configuración)
- Todo el código

---

## 🆘 Solución de Problemas

### "Build failed" en Frontend
- Verifica que `vite.config.js` sea correcto
- Comprueba que todas las dependencias estén en `package.json`

### "Build failed" en Backend
- Verifica que `package.json` tenga todas las dependencias
- Comprueba que `vercel.json` esté bien configurado

### Emails no se envían en Vercel
- Verifica que `EMAIL_USER` y `EMAIL_PASS` sean correctos
- Asegúrate de haber configurado las variables de entorno

### Frontend no puede conectar al Backend
- Comprueba que `VITE_API_URL` esté correctamente configurado
- Verifica que el backend esté corriendo (status verde en Vercel)

---

## 🔄 Actualizar Cambios

Para ambos proyectos:

```bash
git add .
git commit -m "Descripción del cambio"
git push origin main
```

Vercel se redesplegará automáticamente 🎉

---

## 📞 Contacto y Soporte

Para más información sobre Vercel:
- [Documentación Oficial](https://vercel.com/docs)
- [Next.js Deployment](https://vercel.com/docs/frameworks/nextjs)
