// Router: priceRouter - serves pizzas with computed prices
import { Router } from "express";
import {
  listPizzasWithPrices,
  getPizzaPriceById,
  getPizzaWithPriceById,
  computeCustomPrice,
} from "../Controler/priceController.js";

const router = Router();

// GET /API/pizzasWithPrices
router.get("/", listPizzasWithPrices);

// POST /API/pizzasWithPrices/compute { ingredients: [] } - must be before /:id
router.post("/compute", computeCustomPrice);

// GET /API/pizzasWithPrices/:id - get full pizza with price
router.get("/:id", getPizzaWithPriceById);

// GET /API/pizzasWithPrices/:id/price - get only price info
router.get("/:id/price", getPizzaPriceById);

export default router;
