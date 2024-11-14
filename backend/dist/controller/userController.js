"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUser = void 0;
const Users_1 = __importDefault(require("../models/Users"));
const getUser = async (req, res) => {
    try {
        const user = await Users_1.default.findById(req.params.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching user", error: error.message });
    }
};
exports.getUser = getUser;
const updateUser = async (req, res) => {
    try {
        const { username, email } = req.body;
        const user = await Users_1.default.findByIdAndUpdate(req.params.id, { username, email }, { new: true }).select('-password');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "New data update!!", user });
    }
    catch (error) {
        res.status(400).json({ message: "Error updating user", error: error.message });
    }
};
exports.updateUser = updateUser;
