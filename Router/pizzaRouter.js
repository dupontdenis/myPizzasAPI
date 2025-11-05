// Router: pizzaRouter
import { Router } from "express";
import { listPizzas, getPizzaById, searchPizzasByIngredient } from "../Controler/pizzaController.js";

const router = Router();

// GET /API/pizzas
router.get("/", listPizzas);

// GET /API/pizzas/search?ingredient=🍅
router.get("/search", searchPizzasByIngredient);

// GET /API/pizzas/:id
router.get("/:id", getPizzaById);

export default router;
