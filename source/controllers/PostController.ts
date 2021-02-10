import { Request, Response, Router } from "express"
import { AuthMiddleware } from "../middlewares/AuthMiddleware"
import { PostService } from "../services/PostService"

export const instance = Router()

function handler(caller: keyof typeof PostService) {
  return async function (request: Request, response: Response) {
    const { httpStatus, ...service } = await PostService[caller](request)
    return response.status(httpStatus).json(service)
  }
}

instance.get("/", handler("getAll"))
instance.get("/:post_id", handler("getOne"))
instance.post("/", AuthMiddleware, handler("create"))
instance.put("/:post_id", AuthMiddleware, handler("update"))
instance.delete("/:post_id", AuthMiddleware, handler("destroy"))
