import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/video";
import { join, login, logout, postJoin, postLogin } from "../controllers/user";

const homeRouter = express.Router();

homeRouter.get(routes.home, home);

homeRouter.get(routes.join, join);
homeRouter.post(routes.join, postJoin);

homeRouter.get(routes.login, login);
homeRouter.post(routes.login, postLogin);

homeRouter.get(routes.logout, logout);

homeRouter.get(routes.search, search);

export default homeRouter;
