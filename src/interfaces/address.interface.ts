import { Repository } from "typeorm";
import { Address } from "../entities";
import { z } from "zod";
import schemas from "../schemas";

export type iAddressCreate = z.infer<typeof schemas.address.create>;
export type iAddressRepo = Repository<Address>;