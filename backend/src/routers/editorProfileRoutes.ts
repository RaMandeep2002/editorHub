import express from "express";
import { authenticateJWT } from "../middleware/auth";
import { createEditorProfile, getEditorProfile } from "../controller/editorProfileController";

const router = express.Router();

router.post('/', authenticateJWT, createEditorProfile);
router.get('/:userId', authenticateJWT, getEditorProfile);

export default router;