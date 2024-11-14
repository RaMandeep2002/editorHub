import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { AuthRequest, UserPayload } from "../types/custom";

export const authenticateJWT = (req: AuthRequest, res: Response, next: NextFunction) => {
    let token = req.header('Authorization');

    // Check if Authorization header exists
    if (!token) {
        return res.status(401).json({ error: "Access denied. No token provided." });
    }

    // Check if token starts with "Bearer "
    if (token.startsWith("Bearer ")) {
        token = token.slice(7, token.length).trim();
    } else {
        return res.status(401).json({ error: "Access denied. Invalid token format." });
    }

    // Verify the token
    try {
        const verified = jwt.verify(token, "editor") as UserPayload;
        req.user = verified;
        next();
    } catch (error) {
        return res.status(400).json({ error: "Invalid Token" });
    }
};


export const isAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
    if (req.user && req.user.role === 'admin') {
        console.log("User role ===> Admin");
        next();
    } else {
        console.log("Access denied. User role ===>", req.user ? req.user.role : "No user found");
        res.status(403).json({ message: "Access denied. Admin role required." });
    }
}