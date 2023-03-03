import { z } from "zod";

const create = z.object({
    name: z.string().min(3).max(45),
    email: z.string().min(4).max(45).email(),
    password: z.string().max(20),
    admin: z.boolean().default(false)
});

const removePwd = create.omit({
    password: true
}).merge(z.object({
    createdAt: z.date(),
    updatedAt: z.date().nullish(),
    deletedAt: z.date().or(z.string()).nullish(),
    id: z.number().positive().int()
}));

const update = create.partial().omit({ admin: true });

export default {
    create,
    update,
    removePwd
}