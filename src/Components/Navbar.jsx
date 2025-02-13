import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const state = useSelector((state) => state.handleCart);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white py-3 shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-2" to="/">D-Mart</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link active fs-5" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link fs-5" to="/about">About</Link></li>
            {/* <li className="nav-item"><Link className="nav-link fs-5" to="/product">Product</Link></li> */}
            <li className="nav-item"><Link className="nav-link fs-5" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link fs-5" to="/categories">Categories</Link></li>
          </ul>
          <div className="buttons">
            <Link to='/login' className='btn btn-outline-dark'>
              <i className="fa fa-sign-in me-1"></i> Login
            </Link>
            <Link to='/signup' className='btn btn-outline-dark ms-2'>
              <i className='fa fa-user-plus me-1'></i> Signup
            </Link>
            <Link to='/cart' className='btn btn-outline-dark ms-2'>
              <i className='fa fa-shopping-cart me-1'></i> Cart({state?.cart?.length || 0})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
