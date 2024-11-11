"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEditorProfile = exports.createEditorProfile = void 0;
const Profiles_1 = require("../models/Profiles");
const createEditorProfile = async (req, res) => {
    try {
        const profiledata = req.body;
        const editorProfile = new Profiles_1.EditorProfile(profiledata);
        await editorProfile.save();
        res.status(201).json(editorProfile);
    }
    catch (error) {
        res.status(400).json({ message: "Error creating editor profile", error: error.message });
    }
};
exports.createEditorProfile = createEditorProfile;
const getEditorProfile = async (req, res) => {
    try {
        const editorProfile = await Profiles_1.EditorProfile.findOne({ user: req.params.userId });
        if (!editorProfile) {
            return res.status(404).json({ message: "Editor Profile not found" });
        }
        res.json(editorProfile);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching editor Profile", error: error.message });
    }
};
exports.getEditorProfile = getEditorProfile;
