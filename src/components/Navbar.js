import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import logo1 from '../eway1.svg';

export default class Navbar extends Component {
    render() {
        return (
           <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
               {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}



            <Link to='/'>
            <img src={logo1} alt="store" className="navbar-brand" />
            </Link>

                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ms-5">
                            <Link to='/ProductList' className="nav-link">products</Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ms-5">
                            <Link to='/About' className="nav-link">About us</Link>
                        </li>
                    </ul>

                    
            <Link to='/cart' className="ms-auto">
                <ButtonContainer>
                    <span className="me-2">
                    <i className="fas fa-cart-plus"></i>
                    </span>
                    my cart
                </ButtonContainer>
            </Link>
           
        </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav `
background: none;
background-color: transparent;
z-index: 100;
flex =1;
.nav-link{
    color: var(--maindark) !important;
    font-size: 1.5rem;
    text-transform: capitalize;
}

`

