// src/Modal.js
import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, onSubmit, initialItem }) => {
  const [itemName, setItemName] = useState(initialItem?.itemName || "");
  const [price, setPrice] = useState(initialItem?.price || "");
  const [type, setType] = useState(initialItem?.type || "");
  const [weight, setWeight] = useState(initialItem?.weight || "");
  const [description, setDescription] = useState(
    initialItem?.description || ""
  );

  useEffect(() => {
    if (initialItem) {
      setItemName(initialItem.itemName);
      setPrice(initialItem.price);
      setType(initialItem.type);
      setWeight(initialItem.weight);
      setDescription(initialItem.description);
    }
  }, [initialItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ itemName, price, type, weight, description });
    onClose();
   
  };
  if (!isOpen) return null;

  return (
    <div
      className="modal fade show"
      style={{ display: "block" }}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {initialItem ? "Edit Item" : "Add Item"}
            </h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="form-group">
                <label>Item Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  placeholder="Item Name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  className="form-control"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Price"
                />
              </div>
              <div className="form-group">
                <label>Type</label>
                <select
                  className="form-control"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">Select Type</option>
                  <option value="R">R</option>
                  <option value="S">S</option>
                  <option value="J">J</option>
                  <option value="R,S">R,S</option>
                  <option value="R,S,J">R,S,J</option>
                </select>
              </div>
              <div className="form-group">
                <label>Weight (gm)</label>
                <input
                  type="number"
                  className="form-control"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Weight (gm)"
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
