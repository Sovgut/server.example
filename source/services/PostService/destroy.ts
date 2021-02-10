import { Request } from "express";
import { HttpStatus, Service } from "../types";

export async function destroy(request: Request): Promise<Service<null>> {
  try {
    /** @todo Destroy post and return nothing */

    return { httpStatus: HttpStatus.NoContent };
  } catch (exception) {
    /**
     * @todo Send error data to telemetry
     * @example telemetry(exception, 'Exception')
     */

    return { httpStatus: HttpStatus.InternalServerError };
  }
}
