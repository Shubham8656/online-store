import React, { useEffect, useState } from 'react';
import  './Header.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import storeLogo from '../image/shop-logo.jpg';

 function Header(props){
    
    const[items,setitems]=useState(props.length)
    // console.log('items',items)
    useEffect(()=>{
        setitems(props.length)
        // console.log('useeffect',items)
    },[props.length])
     console.log('isloggend',props.isLoggedIn)
    return(
        <div className='header-container'>
           
           <Link to="/" style={{marginLeft:'1%',marginTop:'6px'}}>
               <img src={storeLogo} alt='store logo' id='shop-logo'/>
            </Link>   
           <input type="text" className="header-search-bar" placeholder="What are you looking for?" />
           <button className="search-button" tabIndex="0" type="button">SEARCH</button>
            <div id="nav-cart-container">
                <span id="nav-cart-count" aria-hidden="true">{items}</span>
                <Link to="/cart">
                    <div className="fa fa-shopping-cart" 
                         id='cart' 
                         style={{fontSize:'30px',color:'orange',margin:'auto',marginRight:'20px'}}/>
                </Link>

            </div>
            {
             props.isLoggedIn &&
             <button className="search-button" type="button">Log Out</button>
            }
        </div>
    );
}
const mapStateToProps=(state)=>{
    return{
        length:state.length,
        isLoggedIn: state.isLoggedIn
    }
}
export default connect(mapStateToProps)(Header);