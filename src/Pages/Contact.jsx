import React from "react";

import Layout from "../Layout/Layout";

const Contact = () => {
  return (
    <>
      <Layout title={"Contact Purohit-KhanaKhazana"}>
        <section id="contact" className="contact section">
          {/* Section Title */}
          <div className="container section-title">
            <p>
              <span>Need Help?</span>{" "}
              <span className="description-title">Contact Us</span>
            </p>
          </div>
          {/* End Section Title */}
          <div className="container">
            {/* End Google Maps */}
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="info-item d-flex align-items-center">
                  <i className="icon bi bi-geo-alt flex-shrink-0" />
                  <div>
                    <h3>Address</h3>
                    <a href="#" style={{ color: "red" }}>
                      Near Railway Station,Opp Surya Hotel,Palanpur-385001
                    </a>
                  </div>
                </div>
              </div>
              {/* End Info Item */}
              <div className="col-md-6">
                <div className="info-item d-flex align-items-center">
                  <i className="icon bi bi-telephone flex-shrink-0" />
                  <div>
                    <h3>Call Us For Inquiry</h3>
                    <strong>
                      <a className="card-text me-2" href="tel:+91 8600742766">
                        +91 8600742766
                      </a>

                      <a href="tel:+91 7227003699">+91 7227003699</a>
                    </strong>
                  </div>
                </div>
              </div>

              {/* End Info Item */}
              <div className="col-md-6">
                <div className="info-item d-flex align-items-center">
                  <i className="icon bi bi-envelope flex-shrink-0" />
                  <div>
                    <h3>Email Us</h3>
                    <a href="mailto:purohitkhanakhajana@gmail.com">
                      purohitkhanakhajana@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              {/* End Info Item */}
              <div className="col-md-6">
                <div className="info-item d-flex align-items-center">
                  <i className="icon bi bi-clock flex-shrink-0" />
                  <div>
                    <h3>
                      Order Now
                      <br />
                    </h3>
                    <p>
                      <strong>
                        <a className="card-text me-2" href="tel:+91 8600742766">
                          +91 8600742766
                        </a>

                        <a href="tel:+91 7227003699">+91 7227003699</a>
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="info-item d-flex align-items-center">
                  <i className="icon bi bi-telephone flex-shrink-0" />
                  <div>
                    <h3>Railway Food Order</h3>
                    <p style={{ color: "red" }}>
                      Call Our 24-hour Customer care at 1323 (Toll Free) SMS
                      MEAL to 139
                    </p>
                  </div>
                </div>
              </div>
              {/* End Info Item */}
            </div>
            <h1 className="m-4">Find Us On Map</h1>
            <div>
              <img
                style={{ height: "150px", width: "150px" }}
                src="assets/img/QrCode.png"
                alt=""
              />
            </div>
            <div className="mb-5 mt-5">
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d116477.53208860163!2d72.34939843249597!3d24.174437362498423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x395ce91e8666e5a9%3A0x9d17ce9360c25cde!2snear%2C%20Railway%20Station%20Rd%2C%20opp.%20Surya%20hotel%2C%20Bhavnagar%2C%20Chaman%20Bagh%2C%20Palanpur%2C%20Gujarat%20385001!3m2!1d24.174459499999998!2d72.4318!5e0!3m2!1sen!2sin!4v1723096662511!5m2!1sen!2sin"
                  width={900}
                  height={500}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
