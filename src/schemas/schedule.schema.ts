import { z } from "zod";

const create = z.object({
    date: z.preprocess((date) => {
        if (typeof date === "string") {
            const [year, day, month] = date.split("/");
            return new Date(Number(year), Number(month) - 1, Number(day));
        }
    }, z.date()),
    hour: z.preprocess((date) => {
        if (typeof date === "string") {
            let [hours, minutes]: string[] | number[] = date.split(":");
            hours = Number(hours);
            minutes = Number(minutes);
        if (!isNaN(hours) && !isNaN(minutes) && hours < 24 && minutes < 60) return [hours, minutes];
        }
    }, z.array(z.number().nonnegative())),
    realEstateId: z.number().positive().int()
});

export default {
    create
}