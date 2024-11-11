import express from "express"
import { authenticateJWT } from "../middleware/auth";
import { createApplication, getApplications } from "../controller/applicationController";

const router = express.Router();


router.post('/', createApplication);
router.get('/', authenticateJWT, getApplications);

export default router;