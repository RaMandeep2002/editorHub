"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = exports.authenticateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticateJWT = (req, res, next) => {
    let token = req.header('Authorization');
    // Check if Authorization header exists
    if (!token) {
        return res.status(401).json({ error: "Access denied. No token provided." });
    }
    // Check if token starts with "Bearer "
    if (token.startsWith("Bearer ")) {
        token = token.slice(7, token.length).trim();
    }
    else {
        return res.status(401).json({ error: "Access denied. Invalid token format." });
    }
    // Verify the token
    try {
        const verified = jsonwebtoken_1.default.verify(token, "editor");
        req.user = verified;
        next();
    }
    catch (error) {
        return res.status(400).json({ error: "Invalid Token" });
    }
};
exports.authenticateJWT = authenticateJWT;
const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        console.log("User role ===> Admin");
        next();
    }
    else {
        console.log("Access denied. User role ===>", req.user ? req.user.role : "No user found");
        res.status(403).json({ message: "Access denied. Admin role required." });
    }
};
exports.isAdmin = isAdmin;
