import { Request, Response } from "express";
import services from "../services/schedule";

async function create(req: Request, res: Response): Promise<Response> {
    const schedule = await services.create(req.body, req.userToken!.id);

    return res.status(201).json(schedule);
}

export default {
    create
}