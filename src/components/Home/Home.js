import React from 'react';
// import SignIn from '../SignIn/SignIn';
import  './Home.css';

export default function Home(){
    
    return(
        <div className='home'> 
           Welcome To Online Shoppoing Store 
           <div style={{marginTop:'10px'}}>Go to Category section to order items</div>
            <div style={{marginTop:'10px'}}>Only Personal Care section is Available today</div>
        </div>
    );
}