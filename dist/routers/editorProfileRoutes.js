"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const editorProfileController_1 = require("../controller/editorProfileController");
const router = express_1.default.Router();
router.post('/', auth_1.authenticateJWT, editorProfileController_1.createEditorProfile);
router.get('/:userId', auth_1.authenticateJWT, editorProfileController_1.getEditorProfile);
exports.default = router;