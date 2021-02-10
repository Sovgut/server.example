import { Request } from "express";
import { HttpStatus, Service } from "../types";

export async function getAll(request: Request): Promise<Service<[]>> {
  try {
    /** @todo Fetch all posts and return them */

    return { httpStatus: HttpStatus.Ok, content: [] };
  } catch (exception) {
    /**
     * @todo Send error data to telemetry
     * @example telemetry(exception, 'Exception')
     */

    return { httpStatus: HttpStatus.InternalServerError };
  }
}
