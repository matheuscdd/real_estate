import { Router } from "express";
import controllers from "../controllers";
import middleware from "../middleware";
import schemas from "../schemas";

export const category: Router = Router();

category.get("", 
    controllers.category.read
);

category.get("/:id/realEstate", 
    middleware.idValidCategory("params"), 
    controllers.category.find
);

category.post("", 
    middleware.dataValid(schemas.category.create), 
    middleware.nameValidCategory, 
    middleware.tokenValid, 
    middleware.userTokenValid,
    middleware.adminValid, 
    controllers.category.create
);