import { Router } from "express"
import * as AuthController from "./controllers/AuthController"
import { Controller } from "./controllers/Controller"
import * as PostController from "./controllers/PostController"

export const router = Router()

for (const controller of [AuthController, PostController] as Controller[]) {
  router.use(controller.endpoint, controller.instance)
}
