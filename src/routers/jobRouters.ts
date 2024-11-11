import express from "express";
import { authenticateJWT, isAdmin } from "../middleware/auth";
import { createJOb, getJobs } from "../controller/jobController";

const router = express.Router();

// router.post('/', authenticateJWT, isAdmin, createJOb);
router.post('/', authenticateJWT, createJOb);
router.get('/', getJobs);

export default router;