import express from "express";
import cors from "cors";

import { PrismaClient } from "@prisma/client";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const prisma = new PrismaClient({
  log: ["query"],
});

app.listen(3333);

// app.get("/games", async (request, response) => {
//   const games = await prisma.game.findMany({
//     include: {
//       _count: {
//         select: {
//           ads: true,
//         },
//       },
//     },
//   });

//   return response.json(games);
// });

// app.post("/games/:id/ads", async (request, response) => {
//   const gameId: any = request.params.id;
//   const body: any = request.body;

//   const ad = await prisma.ad.create({
//     data: {
//       gameId,
//       name: body.name,
//       yearsPlaying: body.yearsPlaying,
//       discord: body.discord,
//       weekDays: body.weekDays.join(","),
//       hourStart: convertHourStringToMinutes(body.hourStart),
//       hourEnd: convertHourStringToMinutes(body.hourEnd),
//       useVoiceChannel: body.useVoiceChannel,
//     },
//   });

//   return response.status(201).json(ad);
// });

// app.get("/games/:id/ads", async (request, response) => {
//   const gameId = request.params.id;

//   const ads = await prisma.ad.findMany({
//     select: {
//       id: true,
//       name: true,
//       weekDays: true,
//       useVoiceChannel: true,
//       yearsPlaying: true,
//       hourStart: true,
//       hourEnd: true,
//     },
//     where: {
//       gameId,
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   });

//   return response.json(
//     ads.map((ad: { weekDays: string; hourStart: number; hourEnd: number }) => {
//       return {
//         ...ad,
//         weekDays: ad.weekDays.split(","),
//         hourStart: convertMinutesToHourString(ad.hourStart),
//         hourEnd: convertMinutesToHourString(ad.hourEnd),
//       };
//     })
//   );
// });

// app.get("/ads/:id/discord", async (request, response) => {
//   const adId = request.params.id;

//   const ad = await prisma.ad.findUniqueOrThrow({
//     select: {
//       discord: true,
//     },
//     where: {
//       id: adId,
//     },
//   });

//   return response.json({
//     discord: ad.discord,
//   });
// });