import { Request, Response } from "express";
import Users from "../models/Users";



export const getUser = async (req: Request, res: Response) => {
    try {
        const user = await Users.findById(req.params.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    }
    catch (error: any) {
        res.status(500).json({ message: "Error fetching user", error: error.message });
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { username, email } = req.body;
        const user = await Users.findByIdAndUpdate(req.params.id, { username, email }, { new: true }).select('-password');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "New data update!!", user });
    } catch (error: any) {
        res.status(400).json({ message: "Error updating user", error: error.message })
    }
}