import React, { Component } from 'react';
import Title from '../Title';
import CartCol from './CartCol';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';



export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {
                        (value) => {
                        const  {cart} = value;
                        if (cart.length > 0) {
                            return ( 
                                <React.Fragment>
                                    <Title name="Cart checkout"></Title>
                                    <CartCol></CartCol>
                                    <CartList value={value}></CartList>
                                    <CartTotals value={value} history={this.props.history}></CartTotals>
                                </React.Fragment>
                                
                            )
                        }

                        else {
                            return (
                                <React.Fragment>
                                    <Title name="Cart checkout"></Title>
                                    <EmptyCart></EmptyCart>
                                </React.Fragment>
                            )
                        }
                    }}
                </ProductConsumer>

                


            </section>
        )
    }
}
