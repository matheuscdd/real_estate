import { NextFunction, Request, Response } from "express";
import { iCategoryRepo } from "../interfaces";
import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import { AppError } from "../errors";

export async function nameValidCategory(req: Request, res: Response, next: NextFunction): Promise<void> {
    const categoryRepository: iCategoryRepo = AppDataSource.getRepository(Category);

    const findCategory: Category | null = await categoryRepository.findOneBy({ name: req.body.name });

    if (findCategory) throw new AppError(`Category already exists`, 409);

    return next();
}