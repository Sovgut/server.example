import { Router } from "express"
import { AuthService } from "../services/AuthService"
import { handler } from "./Controller"

export const instance = Router()

instance.post("/login", handler<typeof AuthService>("login", AuthService))
instance.post("/register", handler<typeof AuthService>("register", AuthService))
