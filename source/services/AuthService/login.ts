import { Request } from "express";
import jsonwebtoken from "jsonwebtoken";
import User from "../../models/User";
import { HttpStatus, Service } from "../types";

export async function login(request: Request): Promise<Service<string>> {
  try {
    const email = request.body.email;
    const password = request.body.password;

    const user = User.findOne({ email });
    if (!user) {
      return { httpStatus: HttpStatus.NotFound };
    }

    if (!user.comparePasswords(password)) {
      return { httpStatus: HttpStatus.NotFound };
    }

    const { password: _, ...payload } = user;
    const token = jsonwebtoken.sign(payload, "<secret_key>");

    return { httpStatus: HttpStatus.Ok, content: token };
  } catch (exception) {
    /**
     * @todo Send error data to telemetry
     * @example telemetry(exception, 'Exception')
     */

    return { httpStatus: HttpStatus.InternalServerError };
  }
}
