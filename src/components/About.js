import React, { Component } from 'react';
import VMC from './VMC';
import '../App.css';
export default class About extends Component {
    render() {
        return (
            
            <React.Fragment>

                    <section className="section mt-5 py-5 bg-c-dark border-bottom text-center">
                        <div className="container">
                            <h5>Eway Corporation</h5>
                            <div className="underline mx-auto"></div>
                        </div>
                    </section>


                <VMC></VMC>


            </React.Fragment>
            
            
            
        )
    }
}
