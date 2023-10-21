import { Article } from "../model/article.js"

//CRUD
//GET ARTICLES
export const getArticle = async (req, res, next) => {
    try {
        const Articles = await Article.find({})
        res.status(200).json(Articles)
    } catch (error) {
        next(error)
    }
}

//GET ARTICLE
export const getArticleId = async (req, res, next) => {
    try {
        const id = req.params.id
        const articleFound = await Article.findById(id)
    
        if(!articleFound){
            return res.status(404).json({
                message: "Artículo no encontrado"
            })
        }
        res.status(200).json(articleFound)
    } catch (error) {
        next(error)
    }
}

//CREATE ARTICLE
export const createArticle = async (req, res, next) => {
    try {
        const body = req.body
        console.log(body)
        await Article.create(body)
        res.status(201).json(body)
    } catch (error) {
        next(error)
    }
}

//UPDATE ARTICLE
export const updateArticle = async (req, res, next) => {
    try {
        const id = req.params.id
        const newBody = req.body
        const articleUpdate = await Article.findByIdAndUpdate(id, newBody, { new: true }).exec()
        res.status(200).json(articleUpdate)
    } catch (error) {
        next(error)
    }
}

//DELETE ARTICLE
export const deleteArticle = async (req, res, next) => {
    try {
        const id = req.params.id
        const articleDelete = await Article.findByIdAndDelete(id).exec()

        if(!articleDelete){
            return res.status(404).json({message: "Artículo no encontrado"})
        }
        res.status(200).json({articleDelete, message:`Eliminado exitosamente`})
    } catch (error) {
        next(error)
    }
}