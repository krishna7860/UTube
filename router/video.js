import express from "express";
import routes from "../routes";
import {
  upload,
  deleteVideo,
  editVideo,
  videoDetail,
  postUpload
} from "../controllers/video";
import uploadVideo from "../middlewares/multer";

const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
