import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import classes from "./Layout.module.css";
import MainContent from "./MainContent";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <MainContent>
        <Outlet></Outlet>
      </MainContent>
      <Footer></Footer>
    </Fragment>
  );
};

export default Layout;
