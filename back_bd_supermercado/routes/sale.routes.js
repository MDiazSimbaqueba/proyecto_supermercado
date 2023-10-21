import { Router } from "express"
import { createSale, getSaleId, getSales } from "../controllers/sale.controller.js"

export const saleRouter = Router()

//ROUTES
saleRouter.get("/", getSales)
saleRouter.get("/:id", getSaleId)
saleRouter.post("/", createSale)