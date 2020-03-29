import routes from "../routes";

export const join = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;

  if (password !== password2) {
    res.status(400).render;
    res.render("join", { pageTitle: "Join" });
  } else {
    // Todo : Register a user
    // To Do : Log user in
    res.redirect(routes.home);
  }

  res.render("join", { pageTitle: "Join" });
};

export const login = (req, res) => res.render("login", { pageTitle: "Login" });

export const postLogin = (req, res) => {
  // Todo Login User
  res.redirect(routes.home);
};

export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Logout" });

export const users = (req, res) => res.render("users", { pageTitle: "Users" });

export const userProfile = (req, res) =>
  res.render("userProfile", { pageTitle: "User Profile" });

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });

export const editPassword = (req, res) =>
  res.render("editPassword", { pageTitle: "Edit Password" });
