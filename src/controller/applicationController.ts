import { Request, Response } from "express";
import Application from "../models/Application";


export const createApplication = async (req: Request, res: Response) => {
    console.log('inside createApplication controller');
    console.log('req.body: ', req.body);
    try {
        const { job, applicant, portfolio } = req.body;
        console.log('job: ', job);
        console.log('applicant: ', applicant);
        console.log('portfolio: ', portfolio);
        const application = new Application({ job, applicant, portfolio });
        await application.save();
        res.status(201).json(application);
    }
    catch (error: any) {
        console.log('Error in createApplication: ', error.message);
        res.status(400).json({ message: "Error Creating application", error: error.message });
    }
}

export const getApplications = async (req: Request, res: Response) => {
    try {
        const applications = await Application.find().populate('job applicant');
        res.json(applications);
    }
    catch (error: any) {
        res.status(400).json({ message: "Error Fetching Applications", error: error.message })
    }
}