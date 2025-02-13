import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addOrder, clearCart } from "../redux/action/index"; // Import Redux actions

const Checkout = () => {
  const state = useSelector((state) => state.handleCart); // Get cart state from Redux
  const dispatch = useDispatch(); // Get Redux dispatch
  const navigate = useNavigate(); // Use for navigation after order is placed

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "Credit Card",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  

  const handleOrder = () => {
    // Basic form validation
    if (!form.name || !form.email || !form.address || !form.city || !form.postalCode || !form.country) {
      setError("Please fill in all the required fields.");
      return;
    }

    if (state.cart.length === 0) return;

    // Calculate total price
    const shipping = 30.0;
    let subtotal = 0;
    state.cart.forEach((item) => {
      subtotal += item.price * item.qty;
    });
    const total = subtotal + shipping;

    // Create order object
    const newOrder = {
      id: Math.floor(Math.random() * 1000000),
      date: new Date().toLocaleString(),
      customer: form,
      items: state.cart,
      total: total.toFixed(2),
    };

    dispatch(addOrder(newOrder)); //  Save order
    dispatch(clearCart()); //  Clear cart after order
    setError(""); // Clear error message

    // Navigate to the order success page
    navigate("/order-success");
  };

  if (!state.cart || state.cart.length === 0) {
    return (
      <div className="container text-center py-5">
        <h3>Your Cart is Empty</h3>
        <Link to="/" className="btn btn-primary mt-3">
          Continue Shopping
        </Link>
      </div>
    );
  }

  // Calculate total price
  const shipping = 30.0;
  let subtotal = 0;
  state.cart.forEach((item) => {
    subtotal += item.price * item.qty;
  });
  const total = subtotal + shipping;

  return (
    <div className="container py-5">
      <div className="row">
        {/* Left Side - Shipping Details */}
        <div className="col-md-6">
          <h4 className="mb-4">Shipping Details</h4>
          {error && <p className="text-danger">{error}</p>}
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input placeholder='Enter Name'
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input placeholder="Enter your Email"
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input placeholder="Enter your Address"
                type="text"
                name="address"
                className="form-control"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">City</label>
              <input placeholder="Enter your City"
                type="text"
                name="city"
                className="form-control"
                value={form.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Pin Code</label>
              <input placeholder="Enter pin code"
                type="text"
                name="postalCode"
                className="form-control"
                value={form.postalCode}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Country</label>
              <input placeholder="Enter Country"
                type="text"
                name="country"
                className="form-control"
                value={form.country}
                onChange={handleChange}
                required
              />
            </div>
          </form>
        </div>

        {/* Right Side - Cart Summary */}
        <div className="col-md-6">
          <h4 className="mb-4">Order Summary</h4>
          <ul className="list-group mb-3">
            {state.cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="my-0">{item.title}</h6>
                  <small className="text-muted">Qty: {item.qty}</small>
                </div>
                <span className="text-muted">${(item.price * item.qty).toFixed(2)}</span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between">
              <span>Subtotal</span>
              <strong>${subtotal.toFixed(2)}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Shipping</span>
              <strong>${shipping.toFixed(2)}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </li>
          </ul>

          {/* Payment Method */}
          <div className="mb-3">
            <label className="form-label">Payment Method</label>
            <select
              name="paymentMethod"
              className="form-control"
              value={form.paymentMethod}
              onChange={handleChange}
            >
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
          </div>

          {/* Checkout Button */}
          <button className="btn btn-success w-100" onClick={handleOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;



