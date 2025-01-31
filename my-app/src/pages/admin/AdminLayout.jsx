import React from "react";
import AdminHeader from "../../components/admin/header";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/admin/sidebar";

export default function AdminLayout() {
  return (
    <div>
      <AdminHeader />
      <AdminSidebar />
      <main id="main" className="main">
        <Outlet />
      </main>
    </div>
  );
}
