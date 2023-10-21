import { Employee } from "../model/employee.js"

//GET EMPLOYEES
export const getEmployees = async (req, res, next) => {
    try {
        const Employees = await Employee.find({})
        res.status(200).json(Employees)
    } catch (error) {
        next(error)
    }
}

//GET EMPLOYEE
export const getEmployeeId = async (req, res, next) => {
    try {
        const id = req.params.id
        const employeeFound = await Article.findById(id)

        if(!employeeFound){
            return res.status(404).json({
                message: "Empleado no encontrado"
            })
        }
        res.status(200).json(employeeFound)
    } catch (error) {
        next(error)
    }
}

//CREATE EMPLOYEE
export const createEmployee = async (req, res, next) => {
    try {
        const body = req.body
        await Employee.create(body)
        res.status(201).json(body)
    } catch (error) {
        next(error)
    }
}

//UPDATE EMPLOYEE
export const updateEmployee = async (req, res, next) => {
    try {
        const id = req.params.id
        const newBody = req.body
        const employeeUpdate = await Employee.findByIdAndUpdate(id, newBody, {new: true}).exec()
        res.status(200).json(employeeUpdate)
    } catch (error) {
        next(error)
    }
}

//DELETE EMPLOYEE
export const deleteEmployee = async (req, res, next) => {
    try {
        const id = req.params.id
        const employeeDelete = await Employee.findByIdAndDelete(id).exec()

        if(!employeeDelete){
            return res.status(404).json({message: "Empleado no encontrado"})
        }
        res.status(200).json({employeeDelete, message:`Eliminado exitosamente`})
    } catch (error) {
        next(error)
    }
}