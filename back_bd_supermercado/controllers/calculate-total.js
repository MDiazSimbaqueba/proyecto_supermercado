import { Ticket } from "../model/ticket.js"

export const calculateTotal = async (req, res, next) => {
    try {
        const ticketId = req.params.id; // Supongamos que pasas el ID del ticket como parámetro en la URL
        const ticket = await Ticket.findById(ticketId).populate('articles')
        // Usamos populate para obtener los datos de los artículos asociados al ticket

        if (!ticket) {
        return res.status(404).json({ error: 'Ticket no encontrado' })
        }

        let subtotal = 0
        let vat = 0
        let total = 0

        // Calcular el subtotal, IVA y total del ticket
        ticket.articles.forEach((article) => {
        const articleTotal = article.price * article.amount

        subtotal += articleTotal
        vat += articleTotal * ticket.vat
        });

        total = subtotal + vat

        // Actualizar los valores en el ticket
        ticket.subtotal = subtotal.toString()
        ticket.total = total;

        // Guardar los cambios en el ticket
        await ticket.save()

        res.json({ subtotal, vat, total })
    } catch (error) {
        next(error)
        // res.status(500).json({ error: 'Error al calcular el total' })
    }
}