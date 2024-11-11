import express from "express";
import { authenticateJWT } from "../middleware/auth";
import { getUser, updateUser } from "../controller/userController";

const router = express.Router();

router.get('/:id', authenticateJWT, getUser);
router.put('/:id', authenticateJWT, updateUser);

export default router;