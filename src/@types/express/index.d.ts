import * as express from "express";
import { iUserWithoutPwd } from "../../interfaces";

declare global {
    namespace Express {
        interface Request {
            id?: number;
            userToken?: iUserWithoutPwd;
        }
    }
}