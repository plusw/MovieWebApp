import { Outlet } from "react-router-dom";
import Foot from "../compenents/footer/Foot";
import Navbar from "../compenents/header/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Foot />
    </>
  );
};

export default Layout;
