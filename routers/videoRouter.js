import express from "express";
import { deleteVideo, getEditVideo, postEditVideo, videoDetail, getUpload, postUpload } from "../controllers/videoController";
import routes from "../routes";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo(), deleteVideo);


export default videoRouter;