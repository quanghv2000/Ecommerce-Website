import { Route } from "react-router-dom";

import UserLayout from "../pages/user/UserLayout";

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
    isPublic: true,
  },
  {
    path: "/home",
    page: HomePage,
    isPublic: true,
  },
  {
    path: "/about",
    page: AboutPage,
    isPublic: true,
  },
  {
    path: "/contact",
    page: ContactPage,
    isPublic: true,
  },

  /* User's Private Routes*/
  {
    path: "/profile",
    page: ProfilePage,
    isPublic: false,
    allowedRoles: ["USER"],
  },
  {
    path: "/order",
    page: OrderPage,
    isPublic: false,
    allowedRoles: ["USER"],
  },
];

const UserRoutes = (
  <>
    <Route exact path="/" element={<UserLayout />}>
      {userRoutes.map((userRoute) => {
        const { path, isPublic, allowedRoles, page: Page } = userRoute;

        if (isPublic) {
          return <Route key={path} path={path} Component={Page} />;
        }

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
      })}
    </Route>
  </>
);

export default UserRoutes;
