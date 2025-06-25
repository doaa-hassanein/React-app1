import { Children, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {  createHashRouter } from "react-router-dom";
import {  RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Project from "./Components/Project/Project";
import Layout from "./Components/Layout/Layout";

function App() {
  const myRouter = createHashRouter([
    {
      path:"/",
      element: <Layout />,
      children: [
        { index: true, element: <Project /> },
        { path: "/about", element: <About /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/contact", element: <Contact /> },
      ],
    }
    
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
