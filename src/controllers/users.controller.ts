import {Request, Response } from 'express';

const GetInit =(req: Request, res: Response) => {
    return res.json("teste");
};

export default {
    GetInit
};