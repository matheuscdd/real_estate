import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";
import { iUserRepo } from "../interfaces";
import schemas from "../schemas";

export async function tokenValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    let token: string = req.headers.authorization!;

    if (!token) throw new AppError(`Missing authorization token`, 401);

    token = token.split(" ")[1];

    
    async function check(error: any, decoded: any): Promise<void> {  
        if (error) throw new AppError(error.message, 401);

        const userRepository: iUserRepo = AppDataSource.getRepository(User);

        const findUser: User | null = await userRepository.findOneBy({ email: decoded.email });

        if (!findUser) throw new AppError(`Invalid token`, 401);

        req.userToken = schemas.user.removePwd.parse(findUser);
    }

    await verify(token, String(process.env.SECRET_KEY), check);

    return next();
}