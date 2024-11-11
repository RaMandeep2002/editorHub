import { Request, Response } from "express";
import { EditorProfile } from "../models/Profiles";

export const createEditorProfile = async (req: Request, res: Response) => {
    try {
        const profiledata = req.body;
        const editorProfile = new EditorProfile(profiledata);
        await editorProfile.save();
        res.status(201).json(editorProfile);
    }
    catch (error: any) {
        res.status(400).json({ message: "Error creating editor profile", error: error.message });
    }
}

export const getEditorProfile = async (req: Request, res: Response) => {
    try {
        const editorProfile = await EditorProfile.findOne({ user: req.params.userId });
        if (!editorProfile) {
            return res.status(404).json({ message: "Editor Profile not found" });
        }
        res.json(editorProfile);
    }
    catch (error: any) {
        res.status(500).json({ message: "Error fetching editor Profile", error: error.message })
    }
}