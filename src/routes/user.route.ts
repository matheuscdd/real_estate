import { Router } from "express";
import middleware from "../middleware";
import schemas from "../schemas";
import controllers from "../controllers";

export const user: Router = Router();

user.post("", middleware.dataValid(schemas.user.create), middleware.emailValid, controllers.user.create);
user.get("", middleware.tokenValid, middleware.adminValid, controllers.user.read);
user.patch("/:id", middleware.idValidUser, middleware.tokenValid, middleware.emailValid, middleware.dataValid(schemas.user.update, ["name", "email", "password"]), controllers.user.update);
user.delete("/:id", middleware.idValidUser, middleware.tokenValid, middleware.adminValid, controllers.user.remove);



