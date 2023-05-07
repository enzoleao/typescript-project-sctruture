import { NextFunction, Request, Response } from "express";
import { AppError } from "../err/AppError";
import { verify } from "jsonwebtoken";

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    
    const authHeader = req.headers.authorization

  
    if (!authHeader) {
        throw new AppError("Token missing!!", 401)
    }
    
    const [,token] = authHeader.split(" ")
    
    try {
        const { sub: employee_id } = verify(token, process.env.SECRETJWT as string)
        next()
    }
    catch {
        throw new AppError("Invalid Token", 401)
    }
}