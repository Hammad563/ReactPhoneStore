import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Information</h6>
                        <hr/>
                        <p>
                            info
                        </p>
                    </div>
                    
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr/>
                        <Link to='/'>Home</Link>
                        <Link to='/About'>About</Link>
                        <Link to='/ProductList'>Shop</Link>
                        <Link to='/'>Contact</Link>
                    </div>

                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr/>
                        
                        <div> <p className="text-white mb-1">Toronto Ontario, Canada</p></div>
                        <div> <p className="text-white mb-1">+1 647 889 9011</p></div>
                        <div> <p className="text-white mb-1">EwaySupport@gmail.com</p></div>
                        
                    </div>

                </div>
            </div>
        </section>
    )
}
