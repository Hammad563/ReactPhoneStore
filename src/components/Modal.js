import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import { ButtonContainer } from './Button';
import { ButtonCart } from './Button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                { (value) => {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }
                    else {
                        return (
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 pd-6 text-center text-capitalize">
                                        <h5> item added to cart</h5>
                                        <img src={img} className="img-fluid" alt="product" />
                                        <h5>{title}</h5>
                                        <h5>price : $ {[price]}</h5>
                                        <Link to='/ProductList'>
                                            <ButtonContainer onClick = { () =>closeModal()}>
                                            Continue shopping
                                            </ButtonContainer>
                                        </Link>

                                        <Link to='/cart'>
                                            <ButtonCart onClick = { () =>closeModal()}>
                                            Check cart
                                            </ButtonCart>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        )
                        
                    }
                    
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div `
position: fixed;
left: 0;
right: 0;
bottom: 0;
top: 0;
background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;
#modal{
    background: var(--mainWhite);
}
`;
