import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart, delCart } from "../redux/action/index";
import "font-awesome/css/font-awesome.min.css";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  

  const addItem = (product) => {
    dispatch(addCart(product));
  };

  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const EmptyCart = () => (
    <div className="container">
      <div className="row">
        <div className="col-md-12 py-5 bg-light text-center">
          <h4 className="p-3 display-5">Your Cart is Empty</h4>
          <Link to="/" className="btn btn-outline-dark mx-4">
            <i className="fa fa-arrow-left"></i> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );

  const ShowCart = () => {
    if (!state.cart || state.cart.length === 0) {
      return <EmptyCart />;
    }

    const shipping = 30.0;
    let subtotal = 0;
    let totalItems = 0;

    state.cart.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    const total = subtotal + shipping;

    return (
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            {/*  Cart Items */}
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Item List</h5>
              </div>
              <div className="card-body">
                {state.cart.map((item) => (
                  <div key={item.id} className="row d-flex align-items-center mb-3">
                    <div className="col-lg-3 col-md-12">
                      <img src={item.image} alt={item.title} width={100} height={75} />
                    </div>
                    <div className="col-lg-5 col-md-6">
                      <p><strong>{item.title}</strong></p>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex align-items-center">
                      <button className="btn btn-outline-dark px-3 me-2" onClick={() => removeItem(item)}>
                        <i className="fa fa-minus"></i>
                      </button>
                      <p className="mb-0 mx-2">{item.qty}</p>
                      <button className="btn btn-outline-dark px-3 ms-2" onClick={() => addItem(item)}>
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/*  Cart Summary */}
          {state.cart.length > 0 && (
            <div className="col-md-4">
              <h5>Cart Summary</h5>
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <p>Shipping: ${shipping.toFixed(2)}</p>
              <p><strong>Total: ${total.toFixed(2)}</strong></p>
              <Link to="/checkout" className="btn btn-success">
                Proceed to Checkout
              </Link>
            </div>
          )}
        </div>

        {/*  Go to Shopping Button */}
        <Link to="/" className="btn btn-primary d-block mx-auto mt-1" style={{ width: "200px", textAlign: "center" }}>
          Go to Shopping
        </Link>
      </div>
    );
  };

  return <div>{state.cart?.length === 0 ? <EmptyCart /> : <ShowCart />}</div>;
};

export default Cart;


