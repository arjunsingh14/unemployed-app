import React from "react";
import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { Navbar, Sidebar, BigSidebar } from "../../components";
const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <Sidebar />
        <BigSidebar />
        <div>
          <Navbar />
        </div>
      </main>
      <div className="dashboard-page">
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default SharedLayout;
