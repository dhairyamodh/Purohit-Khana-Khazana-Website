import { IoCallOutline } from "react-icons/io5";
import React from "react";

import { MdOutlineEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Layout title={"Menu Purohit-KhanaKhazana"}>
        <section id="menu" className="menu section">
          <h1>Our Menu</h1>
          <img src="" alt="" />
          <Link to="/pickup-menu" className="btn btn-outline-dark mb-5">
            Pickup Menu & Our Hotel Menu
          </Link>
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
                        alt=""
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
                        alt=""
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
                        alt=""
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
                        alt=""
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
            </div>
          </div>

          <div className="container mt-4">
            <div classname="row">
              <div className="card col-md-4 ">
                <div className="card-body">
                  <strong className="card-title">
                    <IoCallOutline size={30} /> Pick up & On the Way Order
                  </strong>
                  <div className="m-2">
                    <a
                      className="card-text btn btn-outline-dark"
                      href="tel:+91 8600742766"
                    >
                      +91 8600742766
                    </a>
                  </div>

                  <div>
                    <a
                      className="card-text btn btn-outline-dark"
                      href="tel:+91 7227003699"
                    >
                      +91 7227003699
                    </a>
                  </div>
                </div>
              </div>
              <div className="card col-md-4">
                <div className="card-body">
                  <strong className="card-title">
                    <MdOutlineEmail size={30} />
                    Mail Us
                  </strong>
                  <div className="m-2">
                    <a
                      className="card-text btn btn-outline-dark"
                      href="mailto:purohitkhanakhajana@gmail.com"
                    >
                      purohitkhanakhajana@gmail.com
                    </a>
                  </div>

                  <div>
                    <strong>
                      <IoCallOutline size={30} /> Food Order Inquiry
                    </strong>
                  </div>
                  <div>
                    <a
                      className="card-text btn btn-outline-dark"
                      href="tel:+91 8600742766"
                    >
                      +91 8600742766
                    </a>
                  </div>
                </div>
              </div>
              <div className="card col-md-4">
                <div className="card-body">
                  <strong className="card-title">
                    <MdLocationOn size={30} />
                    Find Us
                  </strong>
                  <div className="m-2">
                    <a
                      className="card-text btn btn-outline-dark"
                      href="email:purohitkhanakhajana@gmail.com"
                    >
                      Near Railway Station,Opp Surya Hotel,Palanpur-385001
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Menu;
