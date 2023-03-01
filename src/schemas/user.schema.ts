import { hashSync } from "bcryptjs";
import { z } from "zod";

const create = z.object({
    name: z.string().min(3).max(45),
    email: z.string().min(4).max(45).email(),
    password: z.string().max(20).transform((pwd) => hashSync(pwd, 10)),
    admin: z.boolean().default(false)
});

const removePwd = create.omit({
    password: true
}).merge(z.object({
    createAt: z.date(),
    updateAt: z.date().nullish(),
    deleteAt: z.date().or(z.string()).nullish()
}));


export default {
    create,
    removePwd
}