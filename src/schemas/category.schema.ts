import { z } from "zod";

const create = z.object({
    name: z.string().max(45).min(2)
});

export default {
    create
}