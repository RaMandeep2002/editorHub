import { Request, Response } from "express";

export const errorHandler = (err: Error, req: Request, res: Response) => {
    console.log(err.stack);
    res.status(500).json({ message: "Somthing went wrong!!" })
}