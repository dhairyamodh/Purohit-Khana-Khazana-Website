import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, title, description }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>{title}</title>
      </Helmet>
      <Navbar />
      <main style={{ minHeight: "70vh" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Default props for title and description
Layout.defaultProps = {
  title:"Purohit Khana Khazana",
  description:"Purohit Khana Khazana offers the best culinary experience. Order now and enjoy delicious meals delivered to your doorstep.",
};

export default Layout;
