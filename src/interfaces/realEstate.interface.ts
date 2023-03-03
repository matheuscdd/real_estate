import { z } from "zod";
import schemas from "../schemas";
import { Repository } from "typeorm";
import { RealEstate } from "../entities";

export type iRealEstateCreate = z.infer<typeof schemas.realEstate.create>;
export type iRealEstateRepo = Repository<RealEstate>;