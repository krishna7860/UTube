// Home Routes

const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users Routes

const USERS = "/users";
const EDIT_PROFILE = "/edit-profile";
const USER_PROFILE = "/:id";
const EDIT_PASSWORD = "/edit-password";

// Videos Routes

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userProfile: (id) => (id ? `/users/${id}` : USER_PROFILE),
  editProfile: EDIT_PROFILE,
  editPassword: EDIT_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: (id) => (id ? `/videos/${id}` : VIDEO_DETAIL),
  editVideo: (id) => (id ? `/videos/${id}/edit` : EDIT_VIDEO),
  deleteVideo: (id) => (id ? `/videos/${id}/delete` : DELETE_VIDEO),
};

export default routes;
