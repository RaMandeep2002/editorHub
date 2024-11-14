import { Request, Response } from "express";
import Users, { IUser } from "../models/Users";
import jwt from "jsonwebtoken"

export const registerUser = async (req: Request, res: Response): Promise<void> => {
    const { username, email, password, role } = req.body;

    try {
        const existingUser = await Users.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: "User already exists!" });
            return;
        }
        const userObj: IUser = new Users({
            username,
            email,
            password,
            role
        });
        await userObj.save();

        res.status(201).json({ message: "User registered successfully!", user: userObj });
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};
// Login User
export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user: IUser | null = await Users.findOne({ email });
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
            const token = jwt.sign({ _id: user._id }, "editor", { expiresIn: "1h" })
            res.status(200).json({ message: "User logged in successfully", user, token });
        });
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

// Get Profile
export const getProfile = async (req: Request, res: Response) => {
    try {
        const user: IUser | null = await Users.findById(req.params.id).select('-password');
        if (!user) {
            res.status(404).json({ message: "User not found!!" });
            return;
        }
        res.status(200).json({ user })
    }
    catch (error: any) {
        res.status(400).json({ message: "Server error", error: error.message })
    }
}