import { Request } from "express"

export enum HttpStatus {
  Ok = 200,
  Created = 201,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  NotAcceptable = 406,
  InternalServerError = 500,
}

export type AuthenticatedRequest = Request & { user: {} }
export interface Service<ServiceResponse> {
  httpStatus: HttpStatus
  error?: string
  content?: ServiceResponse
}
