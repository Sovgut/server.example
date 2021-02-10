import { Request } from "express"
import jsonwebtoken from "jsonwebtoken"
import User from "../../models/User"
import { HttpStatus, Service } from "../types"

export async function register(request: Request): Promise<Service<string>> {
  try {
    const email = request.body.email
    const username = request.body.username
    const password = request.body.password

    const user = new User({ email, username, password })
    if (!user) {
      return { httpStatus: HttpStatus.NotAcceptable }
    }

    const { password: _, ...payload } = user
    const token = jsonwebtoken.sign(payload, "<secret_key>")

    return { httpStatus: HttpStatus.Created, content: token }
  } catch (exception) {
    /**
     * @todo Send error data to telemetry
     * @example telemetry(exception, 'Exception')
     */

    return { httpStatus: HttpStatus.InternalServerError }
  }
}
