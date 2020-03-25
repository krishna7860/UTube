export const join = (req, res) => res.render("join", { pageTitle: "Join" });

export const login = (req, res) => res.render("login", { pageTitle: "Login" });

export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Logout" });

export const users = (req, res) => res.render("users", { pageTitle: "Users" });

export const userProfile = (req, res) =>
  res.render("userProfile", { pageTitle: "User Profile" });

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });

export const editPassword = (req, res) =>
  res.render("editPassword", { pageTitle: "Edit Password" });
