import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";
import { iUserRepo } from "../interfaces";
import schemas from "../schemas";

export async function tokenValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    let token: string = req.headers.authorization!;

    if (!token) throw new AppError(`Missing bearer token`, 401);
    
    token = token.split(" ")[1];

    verify(token, String(process.env.SECRET_KEY), (error: any, decoded: any) => {
        if (error) throw new AppError(error.message, 401);
        req.idToken = Number(decoded.sub);
        req.admin = decoded.admin;
    });

    return next();

}