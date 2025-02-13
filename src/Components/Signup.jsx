import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div>
      <div className='offset-lg-3 col-lg-6 mt-3'>
        <form className='container'>
            <div className="card">
                <div className="card-header">
                    <h1>User Signup</h1>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>User Name <span className='errms'>*</span></label>
                                <input className='form-control' placeholder='Enter User Name' required></input>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                                <label>Password <span className='errms'></span></label>
                                <input type='pasword' className='form-control' placeholder='Enter Password' required></input>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="form-group">
                                <label>Full Name <span className='errms'>*</span></label>
                                <input className='form-control' placeholder='Enter Full Name' required></input>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                                <label>Email <span className='errms'>*</span></label>
                                <input className='form-control' placeholder='Enter Email' required></input>
                            </div>
                          </div> 
                          <div className="col-lg-6">
                            <div className="form-group" required>
                            <label>State <span className='rrms'>*</span></label>
                                <select className='form-control'>
                                  <option value='Uttar Pardesh'>Uttar Pardesh</option>
                                  <option value='Delhi'>Delhi</option>
                                  <option value='Harayana'>Harayana</option>
                                  <option value='Mumbai'>Mumbai</option>
                                  <option value='Bihar'>Bihar</option> 
                                </select>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group" required>
                                <label>Address</label>
                               <textarea className='form-control' placeholder='Enter Address'></textarea>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group" required>
                                <label>Gender</label>
                                <br></br>
                                <input type='radio' name='gender' value='Male' className='app-check'></input>
                                <label> Male</label>
                                &nbsp;
                                <input type='radio' name='gender' value='Female' className='app-check'></input>
                                <label> Female</label>  
                                </div>
                          </div>              
                </div>
              </div>
              <div className='card-footer'>
                <button type='submit' className='btn btn-primary'>Signup</button>
                &nbsp; &nbsp;
                <Link to={'/login'} className='btn btn-danger'>Close</Link>
              </div>
            </div>
        </form>&nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        </div>
      
      &nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;
    </div>
    
  )
}
