import express from "express";
import routes from "../routes";
import {
  users,
  editProfile,
  userProfile,
  editPassword
} from "../controllers/user";

const userRouter = express.Router();

userRouter.get(routes.home, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.editPassword, editPassword);
userRouter.get(routes.userProfile(), userProfile);

export default userRouter;
