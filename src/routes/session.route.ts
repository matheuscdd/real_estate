import { Router } from "express";
import controllers from "../controllers";
import middleware from "../middleware";
import schemas from "../schemas";

export const session: Router = Router();

session.post("", 
    middleware.dataValid(schemas.session.login), 
    controllers.session.login
);