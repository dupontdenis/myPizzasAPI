// Controller: pizzaController
// ESM enabled via package.json { type: "module" }
import pizzas from "../Models/data.mjs";

export const listPizzas = (req, res) => {
  res.json(pizzas);
};

export const getPizzaById = (req, res) => {
  const id = String(req.params.id);
  const pizza = pizzas.find((p) => String(p.id) === id);
  if (!pizza) {
    return res.status(404).json({ error: "Pizza not found" });
  }
  res.json(pizza);
};

export const searchPizzasByIngredient = (req, res) => {
  const { ingredient } = req.query;
  if (!ingredient) {
    return res.status(400).json({ error: "Query param 'ingredient' is required" });
  }
  const list = pizzas.filter((p) => p.ingredients.includes(ingredient));
  res.json(list);
};
