import { z } from "zod";
import schemas from "../schemas";
import { Repository } from "typeorm";
import { Schedule } from "../entities";

export type iScheduleCreate = z.infer<typeof schemas.schedule.create>;
export type iScheduleRepo = Repository<Schedule>;
export interface iScheduleSuccess {
    message: string;
}