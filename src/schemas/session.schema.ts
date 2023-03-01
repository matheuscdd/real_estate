import { z } from "zod";
import user from "./user.schema";

const login = user.create.pick({ email: true }).merge(z.object({
    password: z.string().max(20)
}));

export default {
    login
}