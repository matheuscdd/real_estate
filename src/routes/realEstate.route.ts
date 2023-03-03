import { Router } from "express";
import schemas from "../schemas";
import middleware from "../middleware";
import controllers from "../controllers";

export const realEstate: Router = Router();

realEstate.post("", middleware.dataValid(schemas.realEstate.create), middleware.idValidCategory("body"), controllers.realEstate.create);

