"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobs = exports.createJOb = void 0;
const Jobs_1 = __importDefault(require("../models/Jobs"));
const createJOb = async (req, res) => {
    try {
        const { title, description, requirements } = req.body;
        const job = new Jobs_1.default({ title, description, requirements });
        await job.save();
        res.status(201).json(job);
    }
    catch (error) {
        res.status(400).json({ message: "Error Happining to create job", error: error.message });
    }
};
exports.createJOb = createJOb;
const getJobs = async (req, res) => {
    try {
        const jobs = await Jobs_1.default.find();
        res.json(jobs);
    }
    catch (error) {
        res.status(500).json({ message: "Error For Fetching jobs", error: error.message });
    }
};
exports.getJobs = getJobs;
