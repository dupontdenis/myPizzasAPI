# Pizza API 🍕

A simple REST API for pizzas - inspired by [ghibliapi.dev](https://ghibliapi.dev)

## 🌐 Live Demo

**API is live at:** [https://mypizzasapi.onrender.com/](https://mypizzasapi.onrender.com/)

Try it now:

- [Get all pizzas](https://mypizzasapi.onrender.com/API/pizzas)
- [Get ingredient prices](https://mypizzasapi.onrender.com/API/ingredientPrices)
- [Get pizzas with prices](https://mypizzasapi.onrender.com/API/pizzasWithPrices)

## Usage

```
GET /API/pizzas
```

Returns all pizzas:

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
fetch("https://mypizzasapi.onrender.com/API/pizzas")
  .then((res) => res.json())
  .then((pizzas) => console.log(pizzas));
```

### Search pizzas by ingredient

```
GET /API/pizzas/search?ingredient=🍅
```

### Get the price of one pizza

```
GET /API/pizzasWithPrices/:id/price
```

### Compute a custom price

```
POST /API/pizzasWithPrices/compute
Content-Type: application/json
{ "ingredients": ["🍅", "🧀", "🍄"] }
```

### Get all ingredient prices

```
GET /API/ingredientPrices
```

### Get a pizza by id (UUID)

```
GET /API/pizzas/:id
```

Example:

```
GET /API/pizzas/a2a7e8c6-2f0a-4a1b-9c5a-9d8f64c0c101
```

Response:

```json
{
  "id": "a2a7e8c6-2f0a-4a1b-9c5a-9d8f64c0c101",
  "name": "queen",
  "ingredients": ["🐷", "🍄", "🍅", "🧀"]
}
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
