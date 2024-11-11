"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApplications = exports.createApplication = void 0;
const Application_1 = __importDefault(require("../models/Application"));
const createApplication = async (req, res) => {
    console.log('inside createApplication controller');
    console.log('req.body: ', req.body);
    try {
        const { job, applicant, portfolio } = req.body;
        console.log('job: ', job);
        console.log('applicant: ', applicant);
        console.log('portfolio: ', portfolio);
        const application = new Application_1.default({ job, applicant, portfolio });
        await application.save();
        res.status(201).json(application);
    }
    catch (error) {
        console.log('Error in createApplication: ', error.message);
        res.status(400).json({ message: "Error Creating application", error: error.message });
    }
};
exports.createApplication = createApplication;
const getApplications = async (req, res) => {
    try {
        const applications = await Application_1.default.find().populate('job applicant');
        res.json(applications);
    }
    catch (error) {
        res.status(400).json({ message: "Error Fetching Applications", error: error.message });
    }
};
exports.getApplications = getApplications;
