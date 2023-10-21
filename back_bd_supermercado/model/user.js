import mongoose from 'mongoose'

// USER SCHEMA
const userSchema = new mongoose.Schema({
    name: String,
    last_name: String,
    phone: String
})

//USER MODEL
export const User = mongoose.model('User', userSchema) 