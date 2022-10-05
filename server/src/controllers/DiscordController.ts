import { Request, Response } from "express";
import { prisma } from "../server";

class DiscordController {
  async index(request: Request, response: Response) {
    const adId = request.params.id;

    const ad = await prisma.ad.findUniqueOrThrow({
      select: {
        discord: true,
      },
      where: {
        id: adId,
      },
    });

    return response.json({
      discord: ad.discord,
    });
  }
}

export default new DiscordController();
