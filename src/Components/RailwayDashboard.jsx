import React, { useState, useEffect } from "react";
import {
  db,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
} from "../Firebase/Config";
import Modal from "../Modal";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const RailwayDashboard = () => {
  const [railwayItems, setRailwayItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const querySnapshot = await getDocs(collection(db, "railway"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRailwayItems(data);
    };

    loadData();
  }, []);

  const handleAdd = async (item) => {
    await addDoc(collection(db, "railway"), item);
    const querySnapshot = await getDocs(collection(db, "railway"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setRailwayItems(data);
  };

  const handleUpdate = async (id, updatedData) => {
    await updateDoc(doc(db, "railway", id), updatedData);
    const querySnapshot = await getDocs(collection(db, "railway"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setRailwayItems(data);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "railway", id));
    const querySnapshot = await getDocs(collection(db, "railway"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setRailwayItems(data);
  };

  const openModal = (item = null) => {
    setModalData(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalData(null);
  };

  return (
    <Layout title={"RailwayDashboard Purohit-KhanaKhazana"}>
    <div className="container">
      <h1>Railway Items</h1>
      <button className="btn btn-primary" onClick={() => openModal()}>
        Add Railway Item
      </button>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>Type</th>
            <th>Weight</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {railwayItems.map((item) => (
            <tr key={item.id}>
              <td>{item.itemName}</td>
              <td>{item.price}</td>
              <td>{item.type}</td>
              <td>{item.weight}</td>
              <td>{item.description}</td>
              <td>
                <button
                  className="btn btn-warning btn-md m-2"
                  onClick={() => openModal(item)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-md ml-2"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/purohit/admin" className="btn btn-outline-primary">
        Back
      </Link>
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        onSubmit={(item) => {
          if (modalData && modalData.id) {
            handleUpdate(modalData.id, item);
          } else {
            handleAdd(item);
          }
        }}
        initialItem={modalData}
      />
    </div>
    </Layout>
  );
};

export default RailwayDashboard;
