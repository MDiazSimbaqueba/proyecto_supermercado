import mongoose from 'mongoose'

// SALE SCHEMA
const saleSchema = new mongoose.Schema({
    ticket: {type: mongoose.Schema.Types.ObjectId, ref: 'Ticket'},
    employee: {type: mongoose.Schema.Types.ObjectId, ref: 'Employee'}
})

//SALE MODEL
export const Sale = mongoose.model('Sale', saleSchema)