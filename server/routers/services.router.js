import {Router} from "express"
import { servicesController } from "../controllers/service.controller.js"

export const serviceRoutes = Router()

serviceRoutes.route("/services").get(servicesController)