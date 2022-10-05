import express from "express";
import cors from "cors";

import { PrismaClient } from "@prisma/client";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

export const prisma = new PrismaClient({
  log: ["query"],
});

app.listen(3333);
