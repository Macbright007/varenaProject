import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { MainContainer } from "./LayoutStyles";
import Nav from "./Nav";

const Main = () => {
  return (
    <MainContainer>
      <Nav />

      <Outlet />

      <Footer />
    </MainContainer>
  );
};

export default Main;
