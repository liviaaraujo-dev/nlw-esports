import { PrismaClient } from "@prisma/client";
import { convertHourStringToMinutes } from "../utils/convert-hour-string-to-minutes";
import { convertMinutesToHourString } from "../utils/convert-minutes-to-hour-string";

const prisma = new PrismaClient();

class AdvertsController {
  async create(request: any, response: any) {
    const gameId: any = request.params.id;
    const body: any = request.body;

    const ad = await prisma.ad.create({
      data: {
        gameId,
        name: body.name,
        yearsPlaying: body.yearsPlaying,
        discord: body.discord,
        weekDays: body.weekDays.join(","),
        hourStart: convertHourStringToMinutes(body.hourStart),
        hourEnd: convertHourStringToMinutes(body.hourEnd),
        useVoiceChannel: body.useVoiceChannel,
      },
    });

    return response.status(201).json(ad);
  }
  async index(request: any, response: any) {
    const gameId = request.params.id;

    const ads = await prisma.ad.findMany({
      select: {
        id: true,
        name: true,
        weekDays: true,
        useVoiceChannel: true,
        yearsPlaying: true,
        hourStart: true,
        hourEnd: true,
      },
      where: {
        gameId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return response.json(
      ads.map(
        (ad: { weekDays: string; hourStart: number; hourEnd: number }) => {
          return {
            ...ad,
            weekDays: ad.weekDays.split(","),
            hourStart: convertMinutesToHourString(ad.hourStart),
            hourEnd: convertMinutesToHourString(ad.hourEnd),
          };
        }
      )
    );
  }
}

export default new AdvertsController();
