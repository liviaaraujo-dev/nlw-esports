import { Response, Request } from "express";
import { prisma } from "../server";

class GamesController {
  async index(request: Request, response: Response) {
    const games = await prisma.game.findMany({
      include: {
        _count: {
          select: {
            ads: true,
          },
        },
      },
    });

    return response.json(games);
  }
}

export default new GamesController();
