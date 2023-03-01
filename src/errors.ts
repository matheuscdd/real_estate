import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export class AppError extends Error {
    message: string;
    statusCode: number;

    constructor(message: string, statusCode: number = 400) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }

}


export function handleErrors(error: Error, req: Request, res: Response, _: NextFunction) {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            message: error.message
        });
    }

    if (error instanceof ZodError) {
        return res.status(400).json({
            message: error.flatten().fieldErrors
        });
    }

    console.log(error);
    return res.status(500).json({
        message: `Internal server error`
    });

}


