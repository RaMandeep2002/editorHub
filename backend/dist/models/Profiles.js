"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorProfile = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const EditiorProfileSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    headline: {
        type: String,
        maxlenght: 200,
    },
    bio: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    specialties: {
        type: String
    },
    editingExperiences: [{
            title: { type: String, required: true },
            creator: { type: String, required: true },
            startDate: {
                type: Date,
                default: Date.now
            },
            endDate: {
                type: Date,
                default: Date.now
            },
            description: { type: String },
            genres: [{ type: String }],
        }],
    editingSamples: [{
            title: {
                type: String,
            },
            description: {
                type: String,
            },
            thumbnail: {
                type: String,
            },
            url: {
                type: String,
            },
            dateAdded: {
                type: Date,
                default: Date.now,
            },
        }],
    rates: {
        hourly: { type: Number },
        perWord: { type: Number },
        perPage: { type: Number }
    },
    availability: {
        availableFrom: { type: Date, required: true },
        turnaroundTime: { type: String }
    },
});
const EditorProfile = mongoose_1.default.model("EditorProfile", EditiorProfileSchema);
exports.EditorProfile = EditorProfile;
