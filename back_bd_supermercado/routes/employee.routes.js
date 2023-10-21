import { Router } from "express"
import { createEmployee, deleteEmployee, getEmployeeId, getEmployees, updateEmployee } from "../controllers/employee.controller.js"
import { validator } from "../middleware/validator.js"

export const employeeRouter = Router()

//ROUTES
employeeRouter.get("/", getEmployees)
employeeRouter.get("/:id", getEmployeeId)
employeeRouter.post("/", validator, createEmployee)
employeeRouter.patch("/:id", validator, updateEmployee)
employeeRouter.delete("/:id", deleteEmployee)