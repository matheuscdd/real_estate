import { Request, Response } from "express";
import services from "../services/schedule";
import { iScheduleSuccess } from "../interfaces";
import { AppError } from "../errors";

async function create(req: Request, res: Response): Promise<Response> {
    const schedule: iScheduleSuccess = await services.create(req.body, req.idToken!);

    return res.status(201).json(schedule);
}

async function find(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);
    if (isNaN(id)) throw new AppError(`Missing id`, 400);

    const schedules = await services.find(id);

    return res.status(200).json(schedules);
}

export default {
    create,
    find
}