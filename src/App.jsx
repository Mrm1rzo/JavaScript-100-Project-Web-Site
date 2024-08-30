import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SiteNavbar from "./companent/siteNavbar";
import ProjectCard from "./companent/projectCard";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import RootLayout from "./layout/RootLayout";

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
