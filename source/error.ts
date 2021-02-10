import { Request, Response } from "express"

export const errorHandler = (_: Request, response: Response) =>
  response.status(404).end()
