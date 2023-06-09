import { Response, Request } from "express";

export class FindUsersByInitials { 
    async handle (req: Request, res: Response): Promise<Response> {
        console.log(req.query)
        return res.json(req.query)
    }
}