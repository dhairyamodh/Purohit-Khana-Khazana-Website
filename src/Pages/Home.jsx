import React from "react";

import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const Home = () => {
  return (
    <>
      <Layout title={"HomePage Purohit-KhanaKhazana"}>
        <div>
          <section id="hero" className="hero section light-background">
            <div className="container">
              <div className="row gy-4 justify-content-center justify-content-lg-between">
                <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1 className="fade-up">
                    Enjoy Your Healthy
                    <br />
                    Delicious Food
                  </h1>
                  <p className="fade-up data-aos-delay={100}">
                    We Are Serving Quality
                  </p>
                  {/* <div className="d-flex">
                  <a href="#book-a-table" className="btn-get-started ">
                    Booka a Table
                  </a>
                </div> */}
                </div>
                <div className="col-lg-5 order-1 order-lg-2 hero-img">
                  <img
                    src="assets/img/menu/menu-item-1.png"
                    className="img-fluid animated"
                    alt
                  />
                </div>
              </div>
            </div>
          </section>

          {/* /Hero Section */}
        </div>
        <section id="menu" className="menu section">
          {/* Section Title */}
          <div className="container section-title">
            <h1>Our Menu</h1>
            <p>
              <span>Check Our</span>{" "}
              <span className="description-title">Most Loved Dishes</span>
            </p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div className="tab-content">
              <div className="tab-pane fade active show" id="menu-starters">
                {/* <div className="tab-header text-center">
                <h1>Menu</h1>
              </div> */}
                <div className="row gy-5">
                  <div className="col-lg-3 menu-item">
                    <a
                      href="assets/img/menu/paneertikka.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/paneertikka.png"
                        className="menu-img img-fluid"
                        alt
                      />
                    </a>
                    <h4>Paneer Tikka Masala</h4>
                    <p className="ingredients">
                      Paneer Tikka Masala is an Indian dish of marinated paneer
                      cheese served in a spiced gravy.
                    </p>
                  </div>
                  {/* Menu Item */}
                  <div className="col-lg-3 menu-item">
                    <a
                      href="assets/img/menu/chana-masala.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/chana-masala.png"
                        className="menu-img img-fluid"
                        alt
                      />
                    </a>
                    <h4>Chana Masala</h4>
                    <p className="ingredients">
                      Chana masala, also known as channay, chole masala, chole ,
                      is a dish from the Indian subcontinent.
                    </p>
                  </div>
                  {/* Menu Item */}
                  <div className="col-lg-3 menu-item">
                    <a
                      href="assets/img/menu/vegJaipuri.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/vegJaipuri.png"
                        className="menu-img img-fluid"
                        alt
                      />
                    </a>
                    <h4>Veg Jaipuri</h4>
                    <p className="ingredients">
                      Veg Jaipuri is a dish from the city of Kolhapur India
                      consisting of mixed vegetables in a thick, spiced gravy.
                    </p>
                  </div>
                  {/* Menu Item */}
                  <div className="col-lg-3 menu-item">
                    <a href="assets/img/menu/dalfry.png" className="glightbox">
                      <img
                        src="assets/img/menu/dalfry.png"
                        className="menu-img img-fluid"
                        alt
                      />
                    </a>
                    <h4>Dal Fry</h4>
                    <p className="ingredients">
                      Dal Fry is a spicy punjabi dish made from mixed dals like
                      Tuvar, Or Moong Dal.
                    </p>
                  </div>
                  {/* Menu Item */}

                  {/* Menu Item */}

                  {/* Menu Item */}
                </div>
              </div>
              <Link to="/menu" className="btn btn-outline-success mb-3">
                See The Menu
              </Link>
            </div>
          </div>
          {/* Testimonials Section */}
          <section
            id="testimonials"
            className="testimonials section light-background"
          >
            {/* Section Title */}
            <div className="container section-title">
              <h2>TESTIMONIALS</h2>
              <p>
                What Are They{" "}
                <span className="description-title">Saying About Us</span>
              </p>
            </div>
            {/* End Section Title */}
            <div className="container">
              <div className="swiper init-swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="row gy-4 justify-content-center">
                        <div className="col-lg-4">
                          <div className="testimonial-content">
                            <p>
                              <i className="bi bi-quote quote-icon-left" />
                              <span>
                                Good food...PurohitKhanaKhazana.. maintained
                                pure quality always.
                              </span>
                              <i className="bi bi-quote quote-icon-right" />
                            </p>
                            <h3>– Regular Cust.</h3>

                            <div className="stars">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="testimonial-content">
                            <p>
                              <i className="bi bi-quote quote-icon-left" />
                              <span>
                                Nice Taste I will Come Again,Thank You Purohit KhanaKhazana
                              </span>
                              <i className="bi bi-quote quote-icon-right" />
                            </p>
                            <h3>– Regular Cust.</h3>

                            <div className="stars">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="testimonial-content">
                            <p>
                              <i className="bi bi-quote quote-icon-left" />
                              <span>
                              The food was so delicious and the service was really great, too!
                              </span>
                              <i className="bi bi-quote quote-icon-right" />
                            </p>
                            <h3>– Regular Cust.</h3>

                            <div className="stars">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End testimonial item */}
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </section>
          {/* /Testimonials Section */}
        </section>
      </Layout>
    </>
  );
};

export default Home;
