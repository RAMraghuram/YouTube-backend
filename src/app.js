import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { BODY_PARSER_LIMIT } from "./constants.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: BODY_PARSER_LIMIT }));
app.use(express.urlencoded({ extended: true, limit: BODY_PARSER_LIMIT }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes import
import userRouter from "./routes/user.routes.js";

// Routes declaration

// https://localhost:8000/api/v1/users/register
app.use("/api/v1/users", userRouter);

export { app };
