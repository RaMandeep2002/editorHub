"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./config/db");
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const applicationRouters_1 = __importDefault(require("./routers/applicationRouters"));
const authRouter_1 = __importDefault(require("./routers/authRouter"));
const editorProfileRoutes_1 = __importDefault(require("./routers/editorProfileRoutes"));
const jobRouters_1 = __importDefault(require("./routers/jobRouters"));
const userRoutes_1 = __importDefault(require("./routers/userRoutes"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
(0, db_1.connectdb)();
app.get("/", (req, res) => {
    res.send("the root folder!!");
});
app.use((0, morgan_1.default)('common', {
    stream: fs_extra_1.default.createWriteStream(path_1.default.join(__dirname, 'access.log'), { flags: 'a' })
}));
app.use('/api/applications', applicationRouters_1.default);
app.use('/api/auth', authRouter_1.default);
app.use('/api/editor-profiles', editorProfileRoutes_1.default);
app.use('/api/jobs', jobRouters_1.default);
app.use('/api/users', userRoutes_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`);
});
