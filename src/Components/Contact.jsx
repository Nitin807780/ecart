import React from 'react';

const Contact = () => {
    return (
        <div className="container my-5">
            <div className="text-center py-4">
                <h1>Have Some Questions?</h1>
                <hr className="w-50 mx-auto" />
            </div>
            <div className="row justify-content-center">
                <div className="col-md-5 d-flex justify-content-center">
                    <img 
                        src="/asserts/images/4.jpg" 
                        alt="Contact Us" 
                        height="400px" 
                        width="400px" 
                        className="rounded shadow"
                    />
                </div>
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="name" 
                                placeholder="Enter Name" 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                placeholder="name@example.com" 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Your Message</label>
                            <textarea 
                                className="form-control" 
                                id="message" 
                                rows="5" 
                                placeholder="Write your message here..." 
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;