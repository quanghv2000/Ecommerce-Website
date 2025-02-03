import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../components/admin/header";
import AdminSidebar from "../components/admin/sidebar";

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
