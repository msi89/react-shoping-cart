import React from "react";
import Navbar from "../components/navbar";

const DefaultLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <Navbar />
      {children}
    </div>
  );
};

export default DefaultLayout;
