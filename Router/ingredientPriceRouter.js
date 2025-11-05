// Router: ingredientPriceRouter - serves ingredient price map as JSON
import { Router } from "express";
import { listIngredientPrices } from "../Controler/priceController.js";

const router = Router();

// GET /API/ingredientPrices
router.get("/", listIngredientPrices);

export default router;
