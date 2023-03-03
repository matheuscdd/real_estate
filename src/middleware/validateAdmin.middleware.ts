import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";


export async function adminValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    if (!req.userToken?.admin) throw new AppError(`Insufficient permission`, 403);

    return next(); 
}