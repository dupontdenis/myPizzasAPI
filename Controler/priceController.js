// Controller: priceController - computes pizza prices using ingredientPrices Map
import pizzas from "../Models/data.mjs";
import ingredientPrices from "../Models/ingredientPrices.mjs";

const computePrice = (ingredients) =>
  ingredients.reduce((sum, ing) => sum + (ingredientPrices.get(ing) || 0), 0);

export const listPizzasWithPrices = (req, res) => {
  const withPrices = pizzas.map((p) => ({
    ...p,
    price: computePrice(p.ingredients),
  }));
  res.json(withPrices);
};

export const listIngredientPrices = (req, res) => {
  // Convert Map -> plain object for JSON serialization
  const obj = Object.fromEntries(ingredientPrices);
  res.json(obj);
};

export const getPizzaPriceById = (req, res) => {
  const id = String(req.params.id);
  const pizza = pizzas.find((p) => String(p.id) === id);
  if (!pizza) return res.status(404).json({ error: "Pizza not found" });
  return res.json({ id: pizza.id, name: pizza.name, price: computePrice(pizza.ingredients) });
};

export const computeCustomPrice = (req, res) => {
  const { ingredients } = req.body || {};
  if (!Array.isArray(ingredients)) {
    return res.status(400).json({ error: "Body must include ingredients: string[]" });
  }
  const price = computePrice(ingredients);
  return res.json({ ingredients, price });
};
