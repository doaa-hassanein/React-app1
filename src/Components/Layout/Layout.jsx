import BasicExample from "../MainNavbar/MainNavbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

import MainNavbar from "../MainNavbar/MainNavbar";

export default function Layout() {
  return (
    <div className="d-flex flex-column" style={{ height: "100vh" }}>
      <MainNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}
