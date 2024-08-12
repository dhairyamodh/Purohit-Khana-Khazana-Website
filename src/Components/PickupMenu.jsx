
import { IoCallOutline } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import { db, collection, getDocs } from "../Firebase/Config";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import Layout from "../Layout/Layout";

const PickupMenu = () => {
  const [pickupItems, setPickupItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "pickup"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPickupItems(data);
    };

    fetchData();
  }, []);

  return (
    <>
       <Layout title={"PickUpMenu Purohit-KhanaKhazana"}>
      <div className="container">
        {/* <h1 style={{ color: "red" }}>Our Menu</h1> */}
        <p>
          <h1 style={{ color: "red" }}>Check Our Pickup Menu</h1>
        </p>
      </div>
      <div className="container">
        <p className="text-center">
          <span style={{ color: "brown" }}>R : Regular</span>
          <span style={{ color: "green" }}> - S : Swaminarayan</span>
          <span style={{ color: "blue" }}> - J : Jain *</span>
        </p>

        <div className="row">
          {pickupItems.map((item) => (
            <div className="col-md-6 mb-4" key={item.id}>
              <div className="card" style={{ color: "" }}>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <strong className="card-title">{item.itemName}</strong>
                      <p className="card-text">
                        {item.weight} gms   {item.type}
                      </p>
                    </div>
                    <div>
                      <strong className="card-title" style={{ color: "green" }}>
                        {item.price} Rs
                      </strong>
                    </div>
                  </div>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="light-background">
        <div className="container">
          <h1 className="text-center mb-2 text-bg-secondary">
            Fix Panjabi Thali - 120
          </h1>
          <p className="text-center" style={{ color: "brown" }}>
            1 Paneer Sabji ,1 Chana Masala , 1 Dal fry ,1 Jeera Rice , 1 Butter
            Milk ,1 Gulab Jamun ,4 Butter Chapati, 1 Papad,
          </p>
          <h1 className="text-center mb-2 text-bg-secondary">
            Fix Gujarati Thali - 90
          </h1>
          <p className="text-center" style={{ color: "brown" }}>
            2 Sabji, 1 Raitu ,1 Dal Rice , 1 Butter Milk ,1 Gulab Jamun ,4
            Butter Chapati, 1 Papad,
          </p>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>For Lunch & Dinner Order Minimum Before 1 Hrs.</li>
                <li>All the items may not be available at all times</li>
                <li>Order once placed not be cancelled</li>
                <li>Prices are subject to change without prior notice.</li>
                <li>A.C. Family Hall available.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>Lunch Time : 10:00 AM to 03:30 PM</li>
                <li>Dinner Time : 06:00 PM to 10:30 PM</li>
                <li>Free delivery within 3KM on order above 300/-</li>
                <li>Can be made without chillies on request.</li>
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
      <div className="container">
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

      </Layout>
    </>
  );
};

export default PickupMenu;
