import { IoCallOutline } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import { db, collection, getDocs } from "../Firebase/Config";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import Layout from "../Layout/Layout";

const RailwayMenu = () => {
  const [railwayItems, setRailwayItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "railway"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRailwayItems(data);
    };

    fetchData();
  }, []);
  return (
    <>
      <Layout
        title={"Railway Menu | Purohit Khana Khazana"}
        description={
          "Savor the taste of our exclusive railway menu, crafted to satisfy your cravings during your journey. Order now from Purohit Khana Khazana for a delightful travel experience"
        }
      >
        <div className="container">
          {/* <h1 style={{ color: "red" }}>Our Menu</h1> */}
          <p>
            <h1 style={{ color: "red" }}>Check Our Railway Menu</h1>
          </p>
        </div>
        <div className="container">
          <p className="text-center">
            <span style={{ color: "brown" }}>R : Regular</span>
            <span style={{ color: "green" }}> - S : Swaminarayan</span>
            <span style={{ color: "blue" }}> - J : Jain *</span>
          </p>
          <div>
            <div className="row ">
              {railwayItems.map((item) => (
                <div className="col-md-6 mb-4" key={item.id}>
                  <div className="card" style={{ color: "" }}>
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <div>
                          <strong className="card-title">
                            {item.itemName}
                          </strong>
                          <p className="card-text">
                            {item.weight} gms - {item.type}
                          </p>
                        </div>
                        <div>
                          <strong
                            className="card-title"
                            style={{ color: "green" }}
                          >
                            {item.price} Rs
                          </strong>
                        </div>
                      </div>
                      <div>
                        <p className="card-text">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="light-background">
          <div className="container">
            <h1 className="text-center mb-2 text-bg-secondary">
              Fix Thali - 230
            </h1>
            <p className="text-center" style={{ color: "brown" }}>
              5 Ghee Roti (125gms) ,1 Paneer Sabji (100gms) ,1 Veg Sabji
              (100gms) , 1 Dal fry (100gms) 1 Jeera Rice (100 gms) , 1 Curd (100
              gms) Or 1 Butter Milk (200ml) ,1 Sweet (25gms) , 1 Papad (Small),
              Salad, (Include 5% GST)
            </p>
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <li>Book Food & Get it Delivered to your Train Berth</li>
                  <li>FOR BOOKING FOOD @ PALANPUR</li>
                  <li>Call Our 24-hour Customer care at 1323 (Toll Free)</li>
                  <li>SMS MEAL to 139</li>
                  <li>Email us customercare.ecatring@irctc.com</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul>
                  <li>Lunch Time : 09:30 AM to 03:30 PM</li>
                  <li>Dinner Time : 06:00 PM to 11:00 PM</li>
                  <li>PARCEL SERVICE WILL BE CHARGE AT ABOVE RATE.</li>
                  <li>GST 5% EXTRA</li>
                  <li>Minimum Order Rs.80.00</li>
                  <li>Delivery Charge Rs.00.00</li>
                  <li style={{ color: "brown" }}>
                    R: Regular (with onion & Garlic)
                  </li>
                  <li style={{ color: "green" }}>
                    S: Swaminarayan (without onion & Garlic)
                  </li>
                  <li style={{ color: "blue" }}>
                    J: Jain (without onion, Garlic, Ginger, Carrot & Potato)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="row">
            <div className="card col-sm-4 ">
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
            <div className="card col-sm-4">
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
            <div className="card col-sm-4">
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
        </section>
      </Layout>
    </>
  );
};

export default RailwayMenu;
