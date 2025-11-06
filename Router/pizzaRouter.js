// Router: pizzaRouter
import { Router } from "express";
import {
  listPizzas,
  getPizzaById,
  searchPizzasByIngredients,
} from "../Controler/pizzaController.js";

const router = Router();

// GET /API/pizzas
router.get("/", listPizzas);

// GET /API/pizzas/search?ingredient=🍅&ingredient=🍄
router.get("/search", searchPizzasByIngredients);

// GET /API/pizzas/:id
router.get("/:id", getPizzaById);

export default router;
