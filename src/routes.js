import { lazy } from "react";
export const urls = {
  home: "/",
  register: "/register",
  login: "/login",
  contacts: "/contacts",
};
const routes = [
  {
    path: urls.home,
    label: "Home",
    exact: true,
    component: lazy(() => import("./views/Home")),
    private: false,
    restricted: false,
  },
  {
    path: urls.login,
    label: "Login",
    exact: true,
    component: lazy(() => import("./views/Login")),
    private: false,
    restricted: true,
  },
  {
    path: urls.register,
    label: "Register",
    exact: true,
    component: lazy(() => import("./views/Register")),
    private: false,
    restricted: true,
  },
  {
    path: urls.contacts,
    label: "Contacts",
    exact: true,
    component: lazy(() => import("./views/Contacts")),
    private: true,
    restricted: false,
  },
];
export default routes;
