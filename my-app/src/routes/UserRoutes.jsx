import { Route } from "react-router-dom";

import UserLayout from "../layouts/UserLayout";

import AboutPage from "../pages/user/about-page";
import ContactPage from "../pages/user/contact-page";
import HomePage from "../pages/user/home-page";
import OrderPage from "../pages/user/order-page";
import ProfilePage from "../pages/user/profile-page";

import PrivateRoutes from "./PrivateRoutes";

export const userRoutes = [
  /* User's Public Routes*/
  {
    path: "/",
    page: HomePage,
  },
  {
    path: "/home",
    page: HomePage,
  },
  {
    path: "/about",
    page: AboutPage,
  },
  {
    path: "/contact",
    page: ContactPage,
  },

  /* User's Private Routes*/
  {
    path: "/profile",
    page: ProfilePage,
    isPrivate: true,
    allowedRoles: ["USER", "ADMIN"],
  },
  {
    path: "/order",
    page: OrderPage,
    isPrivate: true,
    allowedRoles: ["USER", "ADMIN"],
  },
];

const UserRoutes = (
  <>
    <Route exact path="/" element={<UserLayout />}>
      {userRoutes.map((userRoute) => {
        const { path, isPrivate, allowedRoles, page: Page } = userRoute;

        if (isPrivate) {
          return (
            <Route
              key={path}
              path={path}
              element={
                <PrivateRoutes allowedRoles={allowedRoles}>
                  <Page />
                </PrivateRoutes>
              }
            />
          );
        }

        return <Route key={path} path={path} Component={Page} />;
      })}
    </Route>
  </>
);

export default UserRoutes;
