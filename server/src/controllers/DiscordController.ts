import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class DiscordController {
  async index(request: any, response: any) {
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
