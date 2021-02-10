import { Request } from "express";
import { HttpStatus, Service } from "../types";

export async function create(request: Request): Promise<Service<{}>> {
  try {
    /** @todo Do create new post and return them */

    return { httpStatus: HttpStatus.Created, content: {} };
  } catch (exception) {
    /**
     * @todo Send error data to telemetry
     * @example telemetry(exception, 'Exception')
     */

    return { httpStatus: HttpStatus.InternalServerError };
  }
}
