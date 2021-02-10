import cors from "cors"
import express from "express"
import { errorHandler } from "./error"
import { router } from "./router"

express()
  .use(cors())
  .use(express.json())
  .use("/", router)
  .use("*", errorHandler)
  .listen(process.env.PORT || 3000, () => console.log("Server was started"))
