import schemas from "../schemas";
import { z } from "zod";

export type iLogin = z.infer<typeof schemas.session.login>;
export interface iToken {
    token: string;
}