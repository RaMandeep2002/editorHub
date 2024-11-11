"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = exports.loginUser = exports.registerUser = void 0;
const Users_1 = __importDefault(require("../models/Users"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const registerUser = async (req, res) => {
    const { username, email, password, role } = req.body;
    try {
        const existingUser = await Users_1.default.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: "User already exists!" });
            return;
        }
        const userObj = new Users_1.default({
            username,
            email,
            password,
            role
        });
        await userObj.save();
        res.status(201).json({ message: "User registered successfully!", user: userObj });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.registerUser = registerUser;
// Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Users_1.default.findOne({ email });
        if (!user) {
            res.status(400).json({ message: "Invalid email or password" });
            return;
        }
        user.comparePassword(password, (err, isMatch) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (!isMatch) {
                res.status(400).json({ message: "Invalid email or password" });
                return;
            }
            const token = jsonwebtoken_1.default.sign({ _id: user._id }, "editor", { expiresIn: "1h" });
            res.status(200).json({ message: "User logged in successfully", user, token });
        });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.loginUser = loginUser;
// Get Profile
const getProfile = async (req, res) => {
    try {
        const user = await Users_1.default.findById(req.params.id).select('-password');
        if (!user) {
            res.status(404).json({ message: "User not found!!" });
            return;
        }
        res.status(200).json({ user });
    }
    catch (error) {
        res.status(400).json({ message: "Server error", error: error.message });
    }
};
exports.getProfile = getProfile;
