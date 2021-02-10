import { Router } from "express"
import { AuthMiddleware } from "../middlewares/AuthMiddleware"
import { PostService } from "../services/PostService"
import { handler } from "./Controller"

export const instance = Router()
export const endpoint = "/post"

instance.get("/", handler<typeof PostService>("getAll", PostService))
instance.get("/:post_id", handler<typeof PostService>("getOne", PostService))
instance.post(
  "/",
  AuthMiddleware,
  handler<typeof PostService>("create", PostService)
)
instance.put(
  "/:post_id",
  AuthMiddleware,
  handler<typeof PostService>("update", PostService)
)
instance.delete(
  "/:post_id",
  AuthMiddleware,
  handler<typeof PostService>("destroy", PostService)
)
