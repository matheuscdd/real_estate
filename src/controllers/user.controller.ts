import { iUserWithoutPwd } from "../interfaces"
import { Request, Response } from "express";
import services from "../services/users";

async function create(req: Request, res: Response): Promise<Response> {
    const user: iUserWithoutPwd = await services.create(req.body);

    return res.status(201).json(user);
}

async function read(req: Request, res: Response): Promise<Response> {
    const users: iUserWithoutPwd[] = await services.read();

    return res.status(200).json(users);
}

export default {
    create,
    read
}