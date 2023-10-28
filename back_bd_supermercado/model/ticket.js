import mongoose from 'mongoose'

// TICKET SCHEMA
const ticketSchema = new mongoose.Schema({
    client: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    articles: [{type: mongoose.Schema.Types.ObjectId, ref: 'Article'}],
    subtotal: Number,
    total: Number
})

//TICKET MODEL
export const Ticket = mongoose.model('Ticket', ticketSchema)