import React from "react";
import SiteNavbar from "../companent/siteNavbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <header>
        <SiteNavbar></SiteNavbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default RootLayout;
