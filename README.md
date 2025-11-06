# Pizza API 🍕

A simple REST API for pizzas - inspired by [ghibliapi.dev](https://ghibliapi.dev)

## 🌐 Live Demo

**API is live at:** [https://mypizzasapi.onrender.com/](https://mypizzasapi.onrender.com/)

Try it now:

- [Get all pizzas](https://mypizzasapi.onrender.com/API/pizzas)
- [Get ingredient prices](https://mypizzasapi.onrender.com/API/ingredientPrices)
- [Get pizzas with prices](https://mypizzasapi.onrender.com/API/pizzasWithPrices)

## Usage

### Get all pizzas

```bash
curl -X GET -H "Content-Type: application/json" https://mypizzasapi.onrender.com/API/pizzas
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

## 🔧 API Endpoints - curl Examples

> **⚠️ Windows Git Bash Users:** Git Bash on Windows has limited emoji support. For best results:
>
> - **Option 1 (Recommended):** Use **Windows Terminal** with Git Bash (full emoji support) - Press `Win`, search "Windows Terminal", select Git Bash profile
> - **Option 2:** Use the encoded versions below (they work in all terminals)
> - **Option 3:** Run the test script: `bash test-api.sh` (includes all working examples!)
> - **Option 4:** Test in your browser using the live demo links above!

### Quick Test - Run All Examples

```bash
bash test-api.sh
```

This script tests all endpoints with properly encoded emojis.

### Get all pizzas

```bash
curl -X GET -H "Content-Type: application/json" https://mypizzasapi.onrender.com/API/pizzas
```

### Get a pizza by ID

```bash
curl -X GET -H "Content-Type: application/json" https://mypizzasapi.onrender.com/API/pizzas/a2a7e8c6-2f0a-4a1b-9c5a-9d8f64c0c101
```

### Search pizzas by ingredients

```bash
# Single ingredient (🍅 tomato) - URL-encoded
curl -X GET -H "Content-Type: application/json" "https://mypizzasapi.onrender.com/API/pizzas/search?ingredient=%F0%9F%8D%85"

# Multiple ingredients (🍅 + 🍄) - URL-encoded
curl -X GET -H "Content-Type: application/json" "https://mypizzasapi.onrender.com/API/pizzas/search?ingredient=%F0%9F%8D%85&ingredient=%F0%9F%8D%84"
```

### Get all pizzas with prices

```bash
curl -X GET -H "Content-Type: application/json" https://mypizzasapi.onrender.com/API/pizzasWithPrices
```

### Get price for a specific pizza

```bash
curl -X GET -H "Content-Type: application/json" https://mypizzasapi.onrender.com/API/pizzasWithPrices/a2a7e8c6-2f0a-4a1b-9c5a-9d8f64c0c101/price
```

### Compute custom price

```bash
# Unicode escapes work in all terminals (🍅 tomato, 🧀 cheese, 🍄 mushroom)
curl -X POST -H "Content-Type: application/json" \
  -d '{"ingredients": ["\uD83C\uDF45", "\uD83E\uDDC0", "\uD83C\uDF44"]}' \
  https://mypizzasapi.onrender.com/API/pizzasWithPrices/compute
```

### Get all ingredient prices

```bash
curl -X GET -H "Content-Type: application/json" https://mypizzasapi.onrender.com/API/ingredientPrices
```

**Emoji reference (for manual encoding if needed):**

- 🍅 (tomato) = `%F0%9F%8D%85` (URL) or `\uD83C\uDF45` (JSON)
- 🧀 (cheese) = `%F0%9F%A7%80` (URL) or `\uD83E\uDDC0` (JSON)
- 🍄 (mushroom) = `%F0%9F%8D%84` (URL) or `\uD83C\uDF44` (JSON)
- 🐷 (ham) = `%F0%9F%90%B7` (URL) or `\uD83D\uDC37` (JSON)
- 🐑 (lamb) = `%F0%9F%90%91` (URL) or `\uD83D\uDC11` (JSON)
- 🌶 (pepper) = `%F0%9F%8C%B6` (URL) or `\uD83C\uDF36` (JSON)
- 🌵 (cactus) = `%F0%9F%8C%B5` (URL) or `\uD83C\uDF35` (JSON)

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
// Using async/await (modern approach)
const response = await fetch("https://mypizzasapi.onrender.com/API/pizzas");
const pizzas = await response.json();
console.log(pizzas);

// Or with try-catch for error handling
try {
  const response = await fetch("https://mypizzasapi.onrender.com/API/pizzas");
  const pizzas = await response.json();
  console.log(pizzas);
} catch (error) {
  console.error("Error fetching pizzas:", error);
}
```

### Search pizzas by ingredients

```
GET /API/pizzas/search?ingredient=🍅&ingredient=🍄
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
