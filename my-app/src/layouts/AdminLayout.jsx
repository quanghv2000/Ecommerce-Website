import React from "react";
import { Outlet } from "react-router-dom";

import AdminHeader from "./layout-components/admin/header";
import AdminSidebar from "./layout-components/admin/sidebar";
import Breadcrumbs from "./layout-components/admin/breadcrumbs";

export default function AdminLayout() {
  return (
    <div>
      <AdminHeader />
      <AdminSidebar />
      <main id="main" className="main">
        <Breadcrumbs />
        <Outlet />
      </main>
    </div>
  );
}
