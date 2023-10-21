import { Sale } from "../model/sale.js"

//GET SALES
export const getSales = async (req, res, next) => {
    try {
        const Sales = await Sale.find({}).populate("ticket").populate("employee").exec()
        res.status(200).json(Sales)
    } catch (error) {
        next(error)
    }
}

//GET SALE
export const getSaleId = async (req, res, next) => {
    try {
        const id = req.params.id
        const saleFound = await Sale.findById(id).populate("ticket").populate("employee").exec()

        if(!saleFound){
            return res.status(404).json({
                message: "Venta no encontrada"
            })
        }
        res.status(200).json(saleFound)
    } catch (error) {
        next(error)
    }
}

//CREATE SALE
export const createSale = async (req, res, next) => {
    try {
        const body = req.body
        await Sale.create(body)
        res.status(201).json(body)   
    } catch (error) {
        next(error)
    }
}