import { NextFunction, Response, Request } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";
import { iUserRepo } from "../interfaces";

export async function idValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id: number = Number(req.params.id);
    if (isNaN(id)) throw new AppError(`Id need to be a number`, 400);

    const userRepository: iUserRepo = AppDataSource.getRepository(User);
    
    const findId: User | null = await userRepository.findOneBy({ id }); 

    if (!findId) throw new AppError(`Not found`, 409);

    req.id = id;

    return next();
}