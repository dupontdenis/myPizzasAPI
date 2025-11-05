const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const pizzas = [
  { name: "queen", ingredients: ["🐷", "🍄", "🍅", "🧀"] },
  { name: "cheese", ingredients: ["🧀", "🍅"] },
  { name: "oriental", ingredients: ["🍅", "🐑", "🍄", "🌶"] },
  { name: "royal", ingredients: ["🍅", "🌵"] },
];

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Pizza API! 🍕",
    description: "A simple REST API for pizzas - inspired by ghibliapi.dev",
    endpoints: {
      pizzas: "/myAPI/pizzas",
    },
  });
});

app.get("/myAPI/pizzas", (req, res) => {
  res.json(pizzas);
});

app.listen(PORT, () => {
  console.log(`🍕 Pizza API running on port ${PORT}`);
});
