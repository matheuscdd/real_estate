import { z } from "zod";
import address from "./address.schema";

const create = z.object({
    value: z.number(), //talvez 145.6 % 1 != 0
    size: z.number().int(),
    address: address.create,
    categoryId: z.number().int().positive(),
    sold: z.boolean().transform((value) => false).default(false)
});


export default {
    create
}

