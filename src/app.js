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

export { app };
