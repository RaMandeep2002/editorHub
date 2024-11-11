import { Request, Response } from "express";
import Jobs from "../models/Jobs";



export const createJOb = async (req: Request, res: Response) => {
    try {
        const { title, description, requirements } = req.body;
        const job = new Jobs({ title, description, requirements });
        await job.save();
        res.status(201).json(job);
    }
    catch (error: any) {
        res.status(400).json({ message: "Error Happining to create job", error: error.message })
    }
}

export const getJobs = async (req: Request, res: Response) => {
    try {
        const jobs = await Jobs.find();
        res.json(jobs);
    }
    catch (error: any) {
        res.status(500).json({ message: "Error For Fetching jobs", error: error.message })
    }
}