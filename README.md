# 🌐 URL Shortener – Scalable & Lightning Fast 🚀

A high-performance, scalable URL shortening service powered by **Express.js**, **MongoDB**, and **Redis**, with a production-grade infrastructure featuring **Nginx-based load balancing on AWS EC2**.

This project showcases not only fast redirection but also backend redundancy, efficient caching, intelligent rate limiting, and secure user authentication — all packed into a clean and modern tech stack.

---

## 🧠 Overview

This service allows users to:

- 🔗 Generate short URLs from long ones
- 📊 Track click analytics
- 🧑‍💻 Securely log in and manage their URLs
- 🚀 Experience blazing fast redirects thanks to **Redis caching**

What makes this project **stand out** is the robust deployment architecture:  
✅ **Two Express.js server instances**  
✅ **Nginx load balancer** on **AWS EC2**  
✅ **Redis cache** for performance  
✅ **Rate limiting** to prevent abuse

---

## 🔁 Load Balancing with Nginx on EC2

To ensure high availability and performance, the system uses an **Nginx-based reverse proxy** hosted on an **Amazon EC2 instance**. This setup distributes incoming traffic to **two backend Node.js servers** hosted on **Railway**, using the `least_conn` strategy for optimal load distribution.
### 🏗️ Architecture Diagram
![Image](https://github.com/user-attachments/assets/55323714-845d-4371-931e-ee7d9bad9440)

                  +-------------------------+
                  | 🌍 shawty-url.duckdns.org |
                  +------------+------------+
                               |
                        [ EC2 Instance ]
                               |
                      +--------▼--------+
                      |    Nginx Load    |
                      |     Balancer     |
                      +--------+--------+
                               |
           +------------------+------------------+
           |                                     |
     +----------▼-----------+           +------------▼----------+
     |   Backend Server 1   |           |   Backend Server 2    |
     |  (Node.js on Railway)|           |  (Node.js on Railway) |
     +----------+-----------+           +------------+----------+
           |                                     |
           +------------------+------------------+
                              |
                       +------▼------+
                       |   Redis     |
                       +-------------+
                       +------▼------+
                       |   MongoDb   |
                       +-------------+

> 💡 Using Nginx as a load balancer on EC2 increases **resilience**, allows for **horizontal scaling**, and minimizes **single points of failure**.
> ### Test results for load balancer
##**Note that the urls vary between shawty2 and shawty**

![Tested Load Balancer](https://github.com/user-attachments/assets/8db89ae3-5f56-4122-9619-ad9d7c062eb1)




---
<img width="694" height="270" alt="Image" src="https://github.com/user-attachments/assets/874cbd58-4c29-4a7d-9244-5a38cc10ce83" />

## ⚡ Redis-Powered Speed & Resilience

### 🔄 Redis Caching  
Frequently accessed short URLs are cached using Redis, enabling redirections in **~4ms** vs 140+ ms with MongoDB.

| Request Type     | Time Taken |
|------------------|------------|
| MongoDB Fetch    | `141ms`    |
| Redis Cache HIT  | `4ms`      |

### 🚦 Redis Rate Limiting  
Each IP address is rate-limited using **Express middleware** backed by Redis. This prevents spamming and ensures fair usage across all users.

---

## 🛠️ Tech Stack

### 🖥️ Frontend
- ⚛️ React (Vite)
- 🧭 TanStack Router + Query
- 🎨 Vanilla CSS
- 🔌 Axios

### 🔙 Backend
- 🟢 Node.js + Express.js
- 🗄️ MongoDB + Mongoose
- 🧠 Redis for caching & rate limiting
- 🛡️ JWT + bcrypt for Auth
- 🧬 nanoid for unique URLs
- 🌍 CORS, dotenv

### ☁️ Deployment
- Frontend: (https://shawty-url.vercel.app/)
- Backend: Two Instances on [Railway]
- first instance: https://shawty.up.railway.app/
- second instance: https://shawty2.up.railway.app/
- Load Balancer: **Nginx on EC2**
- Domain: [`shawty-url.duckdns.org`](http://shawty-url.duckdns.org)

---

## 📦 Getting Started

```bash
# Clone the repo
git clone https://github.com/rushichavan21/url-shortener.git
cd url-shortener

# Install dependencies
cd backend
npm install

# Create .env file
touch .env
# Add your MONGODB_URI, REDIS_URL, JWT_SECRET, etc.

# Start development server
npm run dev
