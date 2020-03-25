// Imports
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./router/user";
import videoRouter from "./router/video";
import homeRouter from "./router/index";
import routes from "./routes";
import locals from "./middlewares/locals";

const app = express();

// Middlewares
app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(locals);

// Routes
app.use(routes.home, homeRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
