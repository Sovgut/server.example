import { Request, Response, Router } from "express";
import { ServiceContainer } from "../services/types";

export function handler<T>(caller: keyof T, Service: ServiceContainer) {
  return async function (request: Request, response: Response) {
    const { httpStatus, ...service } = await Service[caller as string](request);
    return response.status(httpStatus).json(service);
  };
}

export type Controller = { instance: Router; endpoint: string };
