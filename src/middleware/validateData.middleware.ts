import { NextFunction, Response, Request } from "express";
import { ZodTypeAny } from "zod";
import { AppError } from "../errors";

export function dataValid(schema: ZodTypeAny, arrKeys: string[] = []) {
    return function(req: Request, res: Response, next: NextFunction): void {
        if (!Object.keys(req.body).length) throw new AppError(`Body is empty`, 400);
        
        const validatedDate = schema.parse(req.body);
        if (!Object.keys(validatedDate).length) throw new AppError(`Some optional keys are missing: ${arrKeys}`, 400);

        req.body = validatedDate;

        return next();
    }
}


