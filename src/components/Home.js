import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';
import react from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import Item from './Item';
import iphone from '../images/iphonefinal1.jpg';
 import tablet from '../images/ipadfinal.jpg';
 import PropTypes from 'prop-types';
 //import headphones from '../images/headphones.jpg';
 

export default class Details extends Component{
    render() {
        
        return (
           <react>

                

            <div className="section"> 
                <div className="container">
                    <div className="row">
                        <div className="itemBlock bg-image d-flex align-items-center" >
                            <div className="itemBlock_info d-flex justify-content-center">
                                <div className="itemBlock_infoText px-5">
                                    <h1>Iphone 12 Pro</h1>

                                    <h4> Order Now!</h4>
                                 </div>

                            </div>

                       <div className="itemBlock_actions">
                            <Link to='/ProductList'>
                                
                            
                                <button className='itemBlock_primary'>
                                    Shop Now
                                    
                                </button>

                                </Link>
                       </div>



                      
                   
                </div>



                    </div>
                </div>
            </div>    
               
            
           
        
                   
               
           </react>
        )
    }
}

