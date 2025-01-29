import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../pages/user/UserLayout";
import HomePage from "../pages/user/home-page";
import AboutPage from "../pages/user/about-page";

import NotFoundPage from "../pages/common/404-page";

const router = createBrowserRouter([
  {
    Component: UserLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/home",
        Component: HomePage,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
    ],
  },

  {
    path: "*",
    Component: NotFoundPage,
  },
]);

export default router;
