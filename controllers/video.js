import "../db";
import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 });

    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.error(error);

    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = async (req, res) => {
  const {
    query: { query: searchBy },
  } = req;

  let videos = [];

  try {
    videos = await Video.find({
      title: {
        $regex: searchBy,
        $options: "i",
      },
    });
  } catch (error) {
    console.log(error);
  }

  res.render("search", { pageTitle: "Search", searchBy, videos });
};

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;

  const newvideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });

  console.log(newvideo);

  res.redirect(routes.videoDetail(newvideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch (error) {
    console.error(error.message);
    res.redirect(routes.home);
  }
};

export const editVideo = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;

  try {
    await Video.findByIdAndUpdate(id, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {}

  res.render("editVideo", { pageTitle: "Edit Video" });
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    await Video.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }

  res.redirect(routes.home);
};
