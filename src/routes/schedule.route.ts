import { Router } from "express";
import controllers from "../controllers";
import middleware from "../middleware";
import schemas from "../schemas";

export const schedule: Router = Router();

schedule.post("", middleware.tokenValid, middleware.dataValid(schemas.schedule.create), controllers.schedule.create);