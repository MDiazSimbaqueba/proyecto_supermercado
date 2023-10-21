import { Router } from "express"
import { createArticle, getArticle, getArticleId, updateArticle, deleteArticle } from "../controllers/article.controller.js"
export const articleRouter = Router()

//ROUTES
articleRouter.get("/", getArticle)
articleRouter.get("/:id", getArticleId)
articleRouter.post("/", createArticle)
articleRouter.patch("/:id", updateArticle)
articleRouter.delete("/:id", deleteArticle)