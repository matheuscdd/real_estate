import { Repository } from "typeorm";
import { z } from "zod";
import { Category } from "../entities";
import schemas from "../schemas";

export type iCategoryCreate = z.infer<typeof schemas.category.create>;
export type iCategoryRepo = Repository<Category>;