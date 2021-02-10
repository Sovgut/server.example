import { Request, Response, Router } from "express"
import { AuthService } from "../services/AuthService"

export const instance = Router()

function handler(caller: keyof typeof AuthService) {
  return async function (request: Request, response: Response) {
    const { httpStatus, ...service } = await AuthService[caller](request)
    return response.status(httpStatus).json(service)
  }
}

instance.post("/login", handler("login"))
instance.post("/register", handler("register"))
