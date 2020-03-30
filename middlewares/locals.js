import routes from "../routes";

const locals = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.appName = "Utube";
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};

export default locals;
