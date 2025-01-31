import { Route } from "react-router-dom";

import SignInPage from "../pages/auth/sign-in";
import SignUpPage from "../pages/auth/sign-up";
import UnauthorizedPage from "../pages/common/401-page";
import ForbiddenPage from "../pages/common/403-page";

import NotFoundPage from "../pages/common/404-page";

const PublicRoutes = (
  <>
    {/* Auth Route */}
    <Route path="/sign-in" Component={SignInPage} />
    <Route path="/sign-up" Component={SignUpPage} />
    <Route path="/unauthorized" Component={UnauthorizedPage} />
    <Route path="/forbidden" Component={ForbiddenPage} />

    {/* 404 Route */}
    <Route path="*" Component={NotFoundPage} />
  </>
);

export default PublicRoutes;
