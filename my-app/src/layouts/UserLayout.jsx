import React from "react";
import { Outlet } from "react-router-dom";

import UserHeader from "./layout-components/user/header";

export default function UserLayout() {
  return (
    <>
      <UserHeader />

      <main>
        <Outlet />
      </main>
    </>
  );
}
