import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const authenticateUserController = new AuthenticateUserController();
const createMessageController = new CreateMessageController();
const getLast3MessageController = new GetLast3MessagesController();
const profileUserController = new ProfileUserController();

/* rotas post */
router.post("/authenticate", authenticateUserController.handle);
router.post("/messages", ensureAuthenticated, createMessageController.handle);

/* rotas get */
router.get("/messages/last3", getLast3MessageController.handle);
router.get("/profile", ensureAuthenticated, profileUserController.handle)

export { router };