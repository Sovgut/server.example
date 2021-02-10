import { Request, Response, Router } from "express";

export function handler<T>(caller: keyof T, Service: any) {
  return async function (request: Request, response: Response) {
    const { httpStatus, ...service } = await Service[caller](request);
    return response.status(httpStatus).json(service);
  };
}

export type Controller = { instance: Router; endpoint: string };
