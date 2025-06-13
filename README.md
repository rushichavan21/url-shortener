# 🌐 URL Shortener

A fast and reliable URL shortening service built using Express.js Node.js and MongoDB. 
It allows users to convert long, bulky URLs into short and manageable links with analytics and user authentication support.

## 🚀 Features
- 🔐 User Authentication (Login & Register) : Implemented using JWT tokens and Bcrypt password hashing.
- 🔗 Shorten long URLs : Implemented using nanoId which is mapped to original url and redirects when requested.
- 📈 Dashboard to view all created URLs 
- 📊 Analytics: Track number of clicks per URL
- 🌐 Deployed frontend(vercel) and backend (onrender); 

## 🛠️ Tech Stack

**Frontend:**
- React vite
- Tanstack Router
- Axios
- Vanilla css
- UseQuery

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- dotenv, nanoid

**Deployment:**
- Frontend: Vercel
- Backend: Render

## Clone the Repository
```bash
git clone https://github.com/rushichavan21/url-shortener.git
cd url-shortener

## 📦 Getting Started
For Server:
cd server 
npm install
npm start

For Client:
cd client
npm install:
npm run dev



