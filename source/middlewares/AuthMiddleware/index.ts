import { NextFunction, Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";
import { AuthenticatedRequest, HttpStatus } from "../../services/types";

function validate(request: Request) {
  const authorization = request.headers.authorization;
  if (!authorization || typeof authorization !== "string") return false;

  const [, token] = authorization.split(" ");
  if (!token || typeof token !== "string") return false;

  const user = jsonwebtoken.verify(token, "<secret_key>");
  if (!user) return false;

  (request as AuthenticatedRequest).user = user;
  return true;
}

export function AuthMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const isValid = validate(request);
  if (!isValid) {
    return response.status(HttpStatus.Unauthorized).end();
  }

  return next();
}
