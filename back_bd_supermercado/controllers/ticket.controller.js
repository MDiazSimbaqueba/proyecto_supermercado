import { Ticket } from "../model/ticket.js"

//GET TICKETS
export const getTickets = async (req, res, next) => {
    try {
        const Tickets = await Ticket.find({}).populate("client").populate("article").exec()
        res.status(200).json(Tickets)
    } catch (error) {
        next(error)
    }
}

//GET TICKET
export const getTicket = async (req, res, next) => {
    try {
        const id = req.params.id
        const ticketFound = await Ticket.findById(id).populate("client").populate("article").exec()
        res.status(200).json(ticketFound)

        if (!ticketFound) {
            return res.status(404).json({
                message: "Factura no encontrada"
            })
        }
    } catch (error) {
        next(error) 
    }
}

//CREATE TICKET
export const createTicket = async (req, res, next) => {
    try {
        const body = req.body
        await Ticket.create(body)
        res.status(201).json(body)
    } catch (error) {
        next(error) 
    }
}