import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="col-md-6">
        <div className="card shadow-lg p-4 rounded">
          <div className="card-header text-center bg-dark text-white">
            <h2>User Login</h2>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">User Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="Enter your username" required />
              </div>
              <div className="mb-3 position-relative">
                <label className="form-label">Password <span className="text-danger">*</span></label>
                <div className="input-group">
                  <input type={showPassword ? "text" : "password"} className="form-control" placeholder="Enter your password" required />
                  <span className="input-group-text" onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">Login</button>
                <Link className="btn btn-success" to={'/signup'}>Signup</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


