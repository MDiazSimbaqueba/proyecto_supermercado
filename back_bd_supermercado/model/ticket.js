import mongoose from 'mongoose'

// TICKET SCHEMA
const ticketSchema = new mongoose.Schema({
    subtotal: String,
    vat: { type: Number, required: true },
    total: Number,
    client: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    article: [{type: mongoose.Schema.Types.ObjectId, ref: 'Article'}]
})

//TICKET MODEL
export const Ticket = mongoose.model('Ticket', ticketSchema)