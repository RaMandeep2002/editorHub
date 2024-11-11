import express, { Request, Response } from "express";
import cors from "cors"
import { connectdb } from "./config/db";
import helmet from 'helmet';
import morgan from 'morgan'
import applicationRoutes from './routers/applicationRouters';
import authRoutes from "./routers/authRouter";
import editorProfileRoutes from "./routers/editorProfileRoutes";
import jobRoutes from "./routers/jobRouters";
import userRoutes from "./routers/userRoutes";
import path from "path";
import fs from "fs-extra"

const app = express();

app.use(cors());
app.use(helmet())
app.use(morgan("dev"))
app.use(express.json());

connectdb();

app.get("/", (req: Request, res: Response) => {
    res.send("the root folder!!");
})

app.use(morgan('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
})) 

app.use('/api/applications', applicationRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/editor-profiles', editorProfileRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`);
});