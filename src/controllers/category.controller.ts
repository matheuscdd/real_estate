import { Request, Response } from "express";
import { Category } from "../entities";
import services from "../services/category";

async function create(req: Request, res: Response): Promise<Response> {
    const category: Category = await services.create(req.body);

    return res.status(201).json(category);
}

async function read(req: Request, res: Response): Promise<Response> {
    const categories: Category[] = await services.read();

    return res.status(200).json(categories)
}

export default {
    create,
    read
}