import { z } from "zod";

const create = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().positive().int()
});

export default {
    create
}