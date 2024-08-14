import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, title, description }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Food & Drink" />
        <meta name="author" content="Purohit Khana Khazana" />
        <meta name="description" content={description} />
        <title>{title}</title>
      </Helmet>
      <Navbar />
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
