# 🔐 API REST con Autenticación JWT y Roles de Usuario

Esta API fue desarrollada en Node.js con Express y MongoDB. Permite registrar, iniciar sesión y proteger rutas privadas con autenticación basada en JWT. También maneja diferentes roles de usuario (admin, user) y aplica medidas básicas de seguridad.

---

## 📦 Tecnologías Utilizadas

- Node.js + Express
- MongoDB + Mongoose
- JWT (`jsonwebtoken`)
- Seguridad: `helmet`, `cors`, `express-validator`, `bcryptjs`, `dotenv`

---

## ⚙️ Instalación del Proyecto

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/jwt-crud-api.git
cd jwt-crud-api
2. Instala las dependencias
bash
Copiar
Editar
npm install
3. Crea el archivo .env
env
Copiar
Editar
PORT=3000
MONGO_URI=mongodb://localhost:27017/jwt_crud
JWT_SECRET=miclavesupersecreta
🚀 Ejecutar la API
bash
Copiar
Editar
npm start
La API quedará corriendo en:
📍 http://localhost:3000/

🧪 Pruebas con Thunder Client o Postman
🔸 Registro de Usuario
Ruta: POST /api/auth/register

Body JSON:

json
Copiar
Editar
{
  "email": "admin@example.com",
  "password": "123456",
  "role": "admin"
}
🔸 Login de Usuario
Ruta: POST /api/auth/login

Body JSON:

json
Copiar
Editar
{
  "email": "admin@example.com",
  "password": "123456"
}
Respuesta: Token JWT

json
Copiar
Editar
{
  "token": "aqui-va-tu-token"
}
🔐 Rutas Privadas
Dashboard
Ruta: GET /api/private/dashboard

Header:

http
Copiar
Editar
Authorization: Bearer TU_TOKEN_JWT
Profile
Ruta: GET /api/private/profile

Header: Igual al anterior
