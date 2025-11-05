// Router: priceRouter - serves pizzas with computed prices
import { Router } from "express";
import { listPizzasWithPrices, getPizzaPriceById, computeCustomPrice } from "../Controler/priceController.js";

const router = Router();

// GET /API/pizzasWithPrices
router.get("/", listPizzasWithPrices);

// GET /API/pizzasWithPrices/:id/price
router.get("/:id/price", getPizzaPriceById);

// POST /API/pizzasWithPrices/compute { ingredients: [] }
router.post("/compute", computeCustomPrice);

export default router;
