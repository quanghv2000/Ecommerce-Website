import React from "react";
import AdminHeader from "../../components/admin/header";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
      <AdminHeader />
      <main id="main" className="main">
        <Outlet />
      </main>
    </div>
  );
}
