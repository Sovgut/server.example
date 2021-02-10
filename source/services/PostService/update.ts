import { Request } from "express";
import { HttpStatus, Service } from "../types";

export async function update(request: Request): Promise<Service<{}>> {
  try {
    /** @todo Update post and return them */

    return { httpStatus: HttpStatus.Ok, content: {} };
  } catch (exception) {
    /**
     * @todo Send error data to telemetry
     * @example telemetry(exception, 'Exception')
     */

    return { httpStatus: HttpStatus.InternalServerError };
  }
}
