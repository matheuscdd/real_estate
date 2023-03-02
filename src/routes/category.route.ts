import { Router } from "express";
import controllers from "../controllers";
import middleware from "../middleware";
import schemas from "../schemas";

export const category: Router = Router();

category.get("", controllers.category.read);
category.post("", middleware.tokenValid, middleware.adminValid, middleware.dataValid(schemas.category.create), controllers.category.create);