import { Router } from "express";
import AdvertsController from "./controllers/AdvertsController";
import DiscordController from "./controllers/DiscordController";
import GamesController from "./controllers/GamesController";

const router = Router();

router.get("/games", GamesController.index);
router.post("/games/:id/ads", AdvertsController.create);
router.get("/games/:id/ads", AdvertsController.index);
router.get("/ads/:id/discord", DiscordController.index);

export { router };
