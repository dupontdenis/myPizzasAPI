// Controller: pizzaController
// ESM enabled via package.json { type: "module" }
import pizzas from "../Models/data.mjs";

export const listPizzas = (req, res) => {
  res.json({
    data: pizzas,
    count: pizzas.length,
  });
};

export const getPizzaById = (req, res) => {
  const id = String(req.params.id);
  const pizza = pizzas.find((p) => String(p.id) === id);
  if (!pizza) {
    return res.status(404).json({ error: "Pizza not found" });
  }
  res.json({
    data: pizza,
  });
};

export const searchPizzasByIngredients = (req, res) => {
  const { ingredient } = req.query;
  if (!ingredient) {
    return res.status(400).json({ error: "Query param 'ingredient' is required" });
  }
  // Express automatically converts multiple params with same name to an array
  const ingredientList = Array.isArray(ingredient) ? ingredient : [ingredient];
  // Filter pizzas that contain ALL specified ingredients
  const list = pizzas.filter((p) => ingredientList.every((ing) => p.ingredients.includes(ing)));
  res.json({
    data: list,
    count: list.length,
  });
};
