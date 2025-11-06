import express from "express";
import cors from "cors";
import pizzaRouter from "./Router/pizzaRouter.js";
import priceRouter from "./Router/priceRouter.js";
import ingredientPriceRouter from "./Router/ingredientPriceRouter.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Root welcome route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Pizza API! 🍕",
    description: "A simple REST API for pizzas - inspired by ghibliapi.dev",
    endpoints: {
      pizzas: "/API/pizzas",
      pizzaById: "/API/pizzas/:id",
      pizzasWithPrices: "/API/pizzasWithPrices",
      ingredientPrices: "/API/ingredientPrices",
      pizzaSearchByIngredients: "/API/pizzas/search?ingredient=🍅&ingredient=🍄",
      pizzaSinglePrice: "/API/pizzasWithPrices/:id/price",
      customPrice: {
        method: "POST",
        path: "/API/pizzasWithPrices/compute",
        body: { ingredients: ["🍅", "🧀"] },
      },
    },
  });
});

// Mount routers
app.use("/API/pizzas", pizzaRouter);
app.use("/API/pizzasWithPrices", priceRouter);
app.use("/API/ingredientPrices", ingredientPriceRouter);
app.listen(PORT, () => {
  console.log(`🍕 Pizza API running on port ${PORT}`);
});
