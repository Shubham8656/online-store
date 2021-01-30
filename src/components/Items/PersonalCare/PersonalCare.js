import React from 'react';
import  '../../Category/Category.css';
import {Link} from 'react-router-dom'
import soap from '../../image/soap.jpg';
import Card from '../../Category/Card/Card'
import oil from '../../image/oil.jpg';
import shampo from '../../image/shampo.jpg';

export default class PersonalCare extends React.Component{
    
    render(){
    return(
        <div className='category'>
            <div id="category-header">
                Personal category 
            </div>
            <div className='category-container'>  
                <Link to="/soap">
                    <Card image={soap} name='Soap'/>
                </Link>
                <Link to="/shampo">
                    <Card image={shampo} name='Shampo'/>
                </Link>
                <Link to="/hairoil">
                    <Card image={oil} name='Hair Oil'/>
                </Link>
            </div>
        </div>
    );
    }
}