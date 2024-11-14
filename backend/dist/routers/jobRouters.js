"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const jobController_1 = require("../controller/jobController");
const router = express_1.default.Router();
// router.post('/', authenticateJWT, isAdmin, createJOb);
router.post('/', auth_1.authenticateJWT, jobController_1.createJOb);
router.get('/', jobController_1.getJobs);
exports.default = router;
