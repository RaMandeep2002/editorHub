"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const applicationController_1 = require("../controller/applicationController");
const router = express_1.default.Router();
router.post('/', applicationController_1.createApplication);
router.get('/', auth_1.authenticateJWT, applicationController_1.getApplications);
exports.default = router;
