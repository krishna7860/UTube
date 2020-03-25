import routes from "../routes";

const locals = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.appName = "Utube";

  next();
};

export default locals;
