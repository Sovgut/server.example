import { Router } from "express"

type Controller = { [route: string]: string }
export const router = Router()

/**
 * Routes declared in package.json file
 * ex: "routes": { "/auth": "AuthController" }
 */
const routes = require("../package.json").routes as Controller
if (!routes) {
  throw new Error(
    "[Router]: Routes in package.json not found. See https://github.com/Sovgut/server.example/blob/main/package.json"
  )
}

for (const route in routes) {
  const instance = require(`./controllers/${routes[route]}`).instance
  router.use(route, instance)
}
