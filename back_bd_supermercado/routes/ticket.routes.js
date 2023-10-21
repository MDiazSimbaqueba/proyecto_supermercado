import { Router } from "express"
import { createTicket, getTicket, getTickets } from "../controllers/ticket.controller.js"

export const ticketRouter = Router()

//ROUTES
ticketRouter.get("/", getTickets)
ticketRouter.get("/:id", getTicket)
ticketRouter.post("/", createTicket)