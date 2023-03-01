import { Request, Response } from "express";
import { iToken } from "../interfaces";
import services from "../services/session";

async function login(req: Request, res: Response): Promise<Response> {
    const token: iToken = await services.login(req.body);

    return res.status(200).json(token);
}

export default {
    login
}