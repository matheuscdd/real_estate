import { z } from "zod";
import schemas from "../schemas";
import { Repository } from "typeorm";
import { User } from "../entities";

export type iUserCreate = z.infer<typeof schemas.user.create>;

export type iUserWithoutPwd = z.infer<typeof schemas.user.removePwd>;

export type iUserRepo = Repository<User>;