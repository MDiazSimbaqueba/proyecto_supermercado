import { Router } from "express"
import { calculateTotal } from "../controllers/calculate-total.js"

export const calculateRouter = Router()

//ROUTES
calculateRouter.get("/", calculateTotal)
