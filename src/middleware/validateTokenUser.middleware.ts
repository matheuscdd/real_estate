import { NextFunction, Request, Response } from "express";
import { iUserRepo } from "../interfaces";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";
import schemas from "../schemas";

export async function userTokenValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const userRepository: iUserRepo = AppDataSource.getRepository(User);

    const findUser: User | null = await userRepository.findOneBy({ id: req.idToken! });

    if (!findUser) throw new AppError(`Invalid token`, 401);

    req.userToken = schemas.user.removePwd.parse(findUser);

    return next();
}