import { Router } from "express";
import { LoginMiddleware } from "../middlewares/AuthMiddleware/login";
import { RegisterMiddleware } from "../middlewares/AuthMiddleware/register";
import { AuthService } from "../services/AuthService";
import { handler } from "./Controller";

export const instance = Router();
export const endpoint = "/auth";

instance.post(
  "/login",
  LoginMiddleware,
  handler<typeof AuthService>("login", AuthService)
);
instance.post(
  "/register",
  RegisterMiddleware,
  handler<typeof AuthService>("register", AuthService)
);
