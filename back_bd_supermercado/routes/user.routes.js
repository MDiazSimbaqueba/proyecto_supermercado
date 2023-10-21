import { Router } from "express"
import { getUserId, getUsers, createUser, updateUser, deleteUser } from "../controllers/user.controller.js"

export const userRouter = Router()

//ROUTES
userRouter.get("/", getUsers)
userRouter.get("/:id", getUserId)
userRouter.post("/", createUser);
userRouter.patch('/:id', updateUser)
userRouter.delete('/:id', deleteUser)