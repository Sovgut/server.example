import { Request } from "express"
import { HttpStatus, Service } from "../types"

export async function login(request: Request): Promise<Service<string>> {
  try {
    /** @todo Do authentication logic */

    return { httpStatus: HttpStatus.Ok, content: String() }
  } catch (exception) {
    /**
     * @todo Send error data to telemetry
     * @example telemetry(exception, 'Exception')
     */

    return { httpStatus: HttpStatus.InternalServerError }
  }
}
