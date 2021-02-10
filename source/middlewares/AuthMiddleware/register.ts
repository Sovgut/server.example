import { NextFunction, Request, Response } from "express"
import { HttpStatus } from "../../services/types"

function validate(request: Request) {
  if (typeof request.body.email !== "string") return false
  if (typeof request.body.password !== "string") return false
  if (typeof request.body.username !== "string") return false
  if (request.body.email.trim().length === 0) return false
  if (request.body.password.trim().length === 0) return false
  if (request.body.username.trim().length === 0) return false
  return true
}

export function RegisterMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const isValid = validate(request)
  if (!isValid) {
    return response.status(HttpStatus.NotAcceptable).end()
  }

  return next()
}
