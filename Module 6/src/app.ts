import cors from "cors";
import express, { Application, Request, Response } from "express";

const app: Application = express();

import UserRoutes from "./app/modules/user/user.route";

// using cors
app.use(cors());

// Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", UserRoutes);



app.get("/", (req: Request, res: Response) => {
    res.send("Welcome Our Server....");
});

export default app;
