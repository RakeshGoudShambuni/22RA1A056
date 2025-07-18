# URL Shortener Microservice

This is a lightweight Node.js + Express based URL shortener microservice that you can run anywhere.

## 🚀 Features
- Shorten URLs via HTTP API
- Redirect to original URL using short code
- In-memory storage (simple and portable)
- Ready for deployment via Docker or GitHub

## 📦 Setup

### Clone & Run Locally
```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
npm install
npm start
```

### Run with Docker
```bash
docker build -t url-shortener .
docker run -p 3000:3000 url-shortener
```

## 📥 API Usage

### Shorten URL
```http
POST /shorten
Content-Type: application/json

{
  "longUrl": "https://example.com"
}
```

### Redirect
```http
GET /abc123
```
