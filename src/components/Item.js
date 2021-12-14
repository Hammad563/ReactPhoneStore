import React from 'react';
import '../App.css';
import MenuIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const Item = ({title, desc, background, btnTxt, btnLink}) => {
    return (
        <div className="item" style= { {
        }}>
            <div className="item_container">
                <div className="item_text">
                    <p>
                        {title}
                    </p>
                    <div className="item_desc">
                        <p>
                            {desc}
                        </p>
                    </div>

                <div className="item_lowerthird">
                    <div className="item_buttons ">
                        <Link to='/ProductList'>
                           
                                Shop Now
                    
                        </Link>
                        <div className="item_expand">
                                <MenuIcon></MenuIcon>
                        </div>

                    </div>
                </div>


                </div>
            </div>
        </div>
    )
}

export default Item
