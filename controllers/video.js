import "../db";
import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});

    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);

    res.render("home", { pageTitle: "Home", videos });
  }
};

export const search = (req, res) => {
  const {
    query: { query: searchBy }
  } = req;

  res.render("search", { pageTitle: "Search", searchBy, videos });
};

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;

  const newvideo = await Video.create({
    fileUrl: path,
    title,
    description
  });

  console.log(newvideo);

  res.redirect(routes.videoDetail(newvideo.id));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
