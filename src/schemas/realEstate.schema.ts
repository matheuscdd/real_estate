import { z } from "zod";
import address from "./address.schema";

const create = z.object({
    value: z.number().positive().or(z.string()),
    size: z.number().int().positive(),
    address: address.create,
    categoryId: z.number().int().positive()
});


export default {
    create
}

