import { z } from "zod";

const create = z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(6).optional().nullable(),
    city: z.string().max(20),
    state: z.string().max(2)
});

export default {
    create
}