import React from "react";

import Layout from "../Layout/Layout";

const Aboutus = () => {
  return (
    <>
      <Layout title={"About Us | Purohit Khana Khazana"}>
        <section id="about" className="about section">
          {/* Section Title */}
          <h1>About Us</h1>
          <p style={{ color: "green" }}>We Maintain Quality of Food</p>
          <div>
            <img
              src="assets/img/menu/cover.jpeg"
              alt="cover"
              className="sitename"
            />
          </div>
        </section>
        {/* /About Section */}
      </Layout>
    </>
  );
};

export default Aboutus;
