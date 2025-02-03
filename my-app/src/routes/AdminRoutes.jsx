import { Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";
import DashboardPage from "../pages/admin/dashboard-page";

import PrivateRoutes from "./PrivateRoutes";

export const adminRoutes = [
  {
    path: "/admin-dashboard",
    page: DashboardPage,
    allowedRoles: ["ADMIN"],
  },
];

const AdminRoutes = (
  <>
    <Route exact path="/" element={<AdminLayout />}>
      {adminRoutes.map((adminRoute) => {
        const { path, allowedRoles, page: Page } = adminRoute;

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

export default AdminRoutes;
