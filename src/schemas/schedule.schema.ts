import { z } from "zod";
import user from "./user.schema";

const create = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().positive().int()
});

const list = create.omit({
    realEstateId: true
}).extend({
    id: z.number(),
    user: user.removePwd
}).array();

export default {
    create,
    list
}