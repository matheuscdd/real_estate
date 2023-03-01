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

async function update(req: Request, res: Response): Promise<Response> {
    const user: iUserWithoutPwd = await services.update(req.id!, req.userToken!, req.body);
    //Talvez tenha de mudar o status
    return res.status(201).json(user);
}

async function remove(req: Request, res: Response): Promise<Response> {
    await services.remove(req.id!);

    return res.status(204).json();
}

export default {
    create,
    read,
    remove,
    update
}