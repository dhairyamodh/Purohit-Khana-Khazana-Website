// src/AdminDashboard.js
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const AdminDashboard = () => {
  return (
    <Layout title={"AdminPage Purohit Khana Khazana"}>
      <div className="mt-5">
        <h1>Admin Dashboard</h1>
        <h2>Add Items</h2>

        <nav>
          <Link to="/purohit/admin/pickup">
            <button className="btn btn-outline-primary m-2">
              Pickup Items
            </button>
          </Link>
          <Link to="/purohit/admin/railway">
            <button className="btn btn-outline-primary">Railway Items</button>
          </Link>
        </nav>
        <Link to="/menu">
          <button className="btn btn-outline-primary">Back</button>
        </Link>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
