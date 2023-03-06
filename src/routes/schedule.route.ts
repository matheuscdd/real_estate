import { Router } from "express";
import controllers from "../controllers";
import middleware from "../middleware";
import schemas from "../schemas";

export const schedule: Router = Router();

schedule.get("/realEstate/:id", 
    middleware.tokenValid, 
    middleware.userTokenValid,
    middleware.adminValid, 
    controllers.schedule.find
);

schedule.post("", 
    middleware.tokenValid, 
    middleware.dataValid(schemas.schedule.create), 
    controllers.schedule.create
);