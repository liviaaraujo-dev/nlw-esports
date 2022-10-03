import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class GamesController {
  async index(request: any, response: any) {
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
