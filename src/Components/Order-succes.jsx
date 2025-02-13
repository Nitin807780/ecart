import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="container text-center py-5">
      <h2 className="text-success">🎉 Order Placed Successfully!</h2>
      <p className="lead">Thank you for your purchase. Your order is being processed and will be delivered soon.</p>
      
      <img
        src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
        alt="Order Success"
        width="150"
        height="150"
        className="my-4"
      />

      <div>
        <Link to="/" className="btn btn-primary me-3">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
