import React from 'react';
import Card from '../../Category/Card/Card';
import {Link} from 'react-router-dom';
import chipskur from '../../image/chipskur.jpg';
import clothsoap from '../../image/clothsoap.jpg';

export default function Header(){
    return(
        <div className='category'>
            <div id="category-header">
                Grossary category 
            </div>

            <div className='category-container'>  
                <Link to="/chips_kurkure">
                    <Card image={chipskur} name='chips & kurkure'/>
                </Link>
                <Link to="/shampo">
                    <Card image={clothsoap} name='cloths soap'/>
                </Link>
            </div>
        </div>
        
    );
}