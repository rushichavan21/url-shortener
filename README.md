# 🌐 URL Shortener

A fast and reliable URL shortening service built using **Express.js**, **MongoDB**, and **Redis**.  
It allows users to convert long, bulky URLs into short, manageable links with analytics, user authentication, and request rate limiting.

---

## 🚀 Features

- 🔐 **User Authentication**: Secure login and registration with **JWT tokens** and **bcrypt** password hashing.
- 🔗 **URL Shortening**: Generate short links using **nanoid**, which redirect to original URLs.
- 📈 **User Dashboard**: View and manage all created short URLs.
- 📊 **Analytics**: Track number of clicks per URL.
- 🚦 **Rate Limiting**: Prevent abuse by limiting requests per IP using **Redis + Express middleware**.
- ⚡ **Redis Caching**: Speeds up redirection by caching frequently accessed URLs.
- 🌐 **Live Deployment**:
  - Frontend on **Vercel**
  - Backend on **Render**

---

## ⚡ Redis Makes It Faster!

By integrating Redis, the system significantly reduces redirection time for frequently accessed short links.

| Request Type     | Time Taken |
|------------------|------------|
| Cache MISS       | `141ms`    |
| Cache HIT (Redis)| `4ms`      |

### ⏱️ Real Result from Logs:


<img width="496" height="123" alt="Image" src="https://github.com/user-attachments/assets/d35cbe8c-76e0-4c03-b749-cd8ae5e9156a" />

> With Redis caching, redirection time dropped from **141ms** to just **4ms** ⚡

---

## 🛠️ Tech Stack

### **Frontend**
- React (Vite)
- TanStack Router
- Axios
- useQuery (TanStack Query)
- Vanilla CSS

### **Backend**
- Node.js & Express.js
- MongoDB + Mongoose
- JWT Authentication
- nanoid
- Redis
- Express-Rate-Limit
- dotenv

### **Deployment**
- Frontend: [Vercel](https://vercel.com/)
- Backend: [Render](https://render.com/)

---

## 📦 Getting Started

### Clone the Repository
```bash
git clone https://github.com/rushichavan21/url-shortener.git
cd url-shortener
