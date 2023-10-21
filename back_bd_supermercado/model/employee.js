import mongoose from 'mongoose'

// EMPLOYEE SCHEMA
const employeeSchema = new mongoose.Schema({
    name: String,
    last_name: String,
    rol: String,
    email: { type: String, required: true },
    password: { type: String, required: true }
})

//EMPLOYEE MODEL
export const Employee = mongoose.model('Employee', employeeSchema)