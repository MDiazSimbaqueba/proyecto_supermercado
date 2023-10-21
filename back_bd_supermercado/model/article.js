import mongoose from 'mongoose'

// ARTICLE SCHEMA
const articleSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    amount: Number
})

//ARTICLE MODEL
export const Article = mongoose.model('Article', articleSchema)