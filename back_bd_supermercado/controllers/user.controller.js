import { User } from "../model/user.js"

//CRUD
//GET USERS
export const getUsers = async (req, res, next) => {
    try {
        const Users = await User.find({})
        res.status(200).json(Users)
    } catch (error) {
        next(error)
    }
}

//GET USER
export const getUserId = async (req, res, next) => {
    try {
        const id = req.params.id;
        const userFound = await User.findById(id)
    
        if (!userFound) {
            return res.status(404).json({ message: "Usuario no encontrado" })
        }
        res.status(200).json(userFound)
    } catch (error) {
        next(error)
    }
}

//CREATE USER
export const createUser = async (req, res, next) => {
    try {
        const body = req.body
        console.log(body);
        await User.create(body)
        res.status(201).json(body)
    } catch (error) {
        next(error)
    }
}

//UPDATE USER
export const updateUser = async(req, res, next) => {
    try {
        const id = req.params.id
        const newBody = req.body
        const userUpdate = await User.findByIdAndUpdate(id, newBody, { new: true }).exec()
        res.status(200).json(userUpdate)
    } catch (error) {
        next(error)
    }
}

//DELETE USER
export const deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id
        const deletedUser = await User.findByIdAndDelete(id).exec()
        
        if(!deletedUser){
            return res.status(404).json({message: "Usuario no encontrado"})
        }
        res.status(200).json({deletedUser, message:`Eliminado exitosamente`})
    } catch (error) {
        next(error)
    }
}