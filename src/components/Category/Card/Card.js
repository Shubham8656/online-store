import React from 'react';
import  './Card.css'

// import { Link } from 'react-router-dom';
export default function Card(props){
    return(
        <div className='card-container'>
            <img src={props.image} alt=""/>
            <div id='card-items'>{props.name}</div>
        </div>
        
    );
} 