import express from "express";
import morgan from "morgan";

import { taskRoutes } from "./routes";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/tasks", taskRoutes);

export default app;
