import { Request, Response } from "express";
import { RealEstate } from "../entities";
import services from "../services/realEstate";

async function create(req: Request, res: Response): Promise<Response> {
    const realEstate: RealEstate = await services.create(req.body);

    return res.status(201).json(realEstate);
}

export default {
    create
}

