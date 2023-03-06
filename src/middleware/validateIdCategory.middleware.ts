import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import { iCategoryRepo } from "../interfaces";
import { AppError } from "../errors";

export function idValidCategory(where: "body" | "params") {
    return async function(req: Request, res: Response, next: NextFunction): Promise<void> {
        const id: number = where === "params" ? Number(req.params.id) : Number(req.body.categoryId);
        if (isNaN(id)) throw new AppError(`Id need to be a number`, 400);

        const categoryRepository: iCategoryRepo = AppDataSource.getRepository(Category);
    
        const category: Category | null = await categoryRepository.findOneBy({ id });
        
        if (!category) throw new AppError(`Category not found`, 404);
    
        req.id = id;

        return next();
    }
} 