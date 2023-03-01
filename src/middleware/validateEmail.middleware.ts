import { NextFunction, Response, Request } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";
import { iUserRepo } from "../interfaces";

export async function emailValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const email: string = req.body.email;

    if (!email) return next();

    const userRepository: iUserRepo = AppDataSource.getRepository(User);

    const findEmail: User | null = await userRepository.findOneBy({ email });
    
    if (findEmail) throw new AppError(`Email already existis.`, 409);

    return next();
}