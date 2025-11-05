# Pizza API 🍕

A simple REST API for pizzas - inspired by [ghibliapi.dev](https://ghibliapi.dev)

## Usage

```
GET /myAPI/pizzas
```

Returns:

```json
[
  { "name": "queen", "ingredients": ["🐷", "🍄", "🍅", "🧀"] },
  { "name": "cheese", "ingredients": ["🧀", "🍅"] },
  { "name": "oriental", "ingredients": ["🍅", "🐑", "🍄", "🌶"] },
  { "name": "royal", "ingredients": ["🍅", "🌵"] }
]
```

## FREE Deployment Options

### Option 1: Render.com (Recommended - Easy & Free)

1. Push this code to GitHub
2. Go to [render.com](https://render.com)
3. Click "New +" → "Web Service"
4. Connect your GitHub repo
5. Use these settings:
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Deploy! (No credit card required)

### Option 2: Railway.app (Free Tier)

1. Push to GitHub
2. Go to [railway.app](https://railway.app)
3. Click "New Project" → "Deploy from GitHub"
4. Select your repo
5. Done!

### Option 3: Glitch.com (Instant Remix)

1. Push to GitHub
2. Go to [glitch.com](https://glitch.com)
3. Click "New Project" → "Import from GitHub"
4. Paste your repo URL
5. Your API is live!

## Example Usage

```javascript
fetch("https://your-app.com/myAPI/pizzas")
  .then((res) => res.json())
  .then((pizzas) => console.log(pizzas));
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - Pizza API"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```
