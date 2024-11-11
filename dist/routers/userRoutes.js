"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const userController_1 = require("../controller/userController");
const router = express_1.default.Router();
router.get('/:id', auth_1.authenticateJWT, userController_1.getUser);
router.put('/:id', auth_1.authenticateJWT, userController_1.updateUser);
exports.default = router;
