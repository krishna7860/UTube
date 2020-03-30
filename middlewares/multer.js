import multer from "multer";

const multerMiddleware = multer({ dest: "uploads/videos/" });

const uploadVideo = multerMiddleware.single("videoFile");

export default uploadVideo;
