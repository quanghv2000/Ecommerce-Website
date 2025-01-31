import React from "react";
import UserHeader from "../../components/user/header";
import { Outlet } from "react-router-dom";

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
