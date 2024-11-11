"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectdb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectdb = async () => {
    try {
        await mongoose_1.default.connect("mongodb://localhost:27017/editorhub");
        console.log("DB connected successfully..!!");
    }
    catch (error) {
        console.log("Error ====> ", error);
        process.exit(1);
    }
};
exports.connectdb = connectdb;
