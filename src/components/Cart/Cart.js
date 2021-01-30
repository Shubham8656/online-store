import React from 'react';
import  './Cart.css';
import {connect} from 'react-redux';
import {addToCart,RemoveFromCart,changeLogging} from '../../redux/Action/Action';
import store from '../../redux/Store/Store';
import fire from '../../../src/Firebase';
import ItemCart from './ItemCart';
import dove from '../image/dove.jpg';
import santoor from '../image/santoor.jpg';
import lifebouy from '../image/Lifebouy.webp';
import lux from '../image/lux.jpg';
import godrej from '../image/godrej.jpg';
import { Link, Redirect } from 'react-router-dom';
import vatika from '../image/vatika.jpg';
import doves from '../image/doves.jpg';
import clinic from '../image/clinic.jpg';
import head from '../image/head.jpg';
import sun from '../image/sunsilk.jpg';
import pantene from '../image/pantene.jpg';
import parachute from '../image/parachute.jpg';
import jasmine from '../image/jasmine.jpg';
import amla from '../image/amla.jpg';
import indu from '../image/induleka.jpg';
import tomato from '../image/tomato.jpg';
import chilli from '../image/chilli.jpg';
import classic from '../image/classic_chip.jpg';
import onion from '../image/onion.jpg';
import wheels from '../image/wheels.jpg';
import triangles from '../image/triangles.jpg';
import kurkure from '../image/masala_kur.jpg';

import Login from "../Login/Login";

 class Cart extends React.Component{

    constructor(props){
        super(props)
        this.state={
            items:[
                {
                    id:1,
                    name:'Dove',
                    price:10,
                    unit:1,
                    image:dove
                },
                {
                    id:2,
                    name:'Santoor',
                    price:20,
                    unit:1,
                    image:santoor
                },
                {
                    id:3,
                    name:'Lux',
                    price:15,
                    unit:1,
                    image:lux
                },
                {
                    id:4,
                    name:'Lifebuoy',
                    price:10,
                    unit:1,
                    image:lifebouy
                },
                {
                    id:5,
                    name:'Godrej No.1',
                    price:10,
                    unit:1,
                    image:godrej
                },
                 {
                    id:1,
                    name:'Vatika',
                    price:1,
                    unit:1,
                    image:vatika
                },
                {
                    id:2,
                    name:'Dove',
                    price:10,
                    unit:1,
                    image:doves
                },
                {
                    id:3,
                    name:'Clinic Plus',
                    price:1,
                    unit:1,
                    image:clinic
                },
                {
                    id:4,
                    name:'Head & Shoulder',
                    price:2,
                    unit:1,
                    image:head
                },
                {
                    id:5,
                    name:'Sunsilk',
                    price:10,
                    unit:1,
                    image:sun
                },
                {
                    id:6,
                    name:'Pantene',
                    price:3,
                    unit:1,
                    image:pantene
                },
                {
                    id:1,
                    name:'Parachute',
                    price:90,
                    unit:1,
                    image:parachute
                },
                {
                    id:2,
                    name:'Jasmine',
                    price:40,
                    unit:1,
                    image:jasmine
                },
                {
                    id:3,
                    name:'Amla',
                    price:40,
                    unit:1,
                    image:amla
                },
                {
                    id:4,
                    name:'Indulela',
                    price:130,
                    unit:1,
                    image:indu
                },
                {
                    id:1,
                    name:'Tomato Chips',
                    price:5,
                    unit:1,
                    image:tomato
                },
                {
                    id:2,
                    name:'Chips (Chilly)',
                    price:5,
                    unit:1,
                    image:chilli
                },
                {
                    id:3,
                    name:'Chips (Classic)',
                    price:5,
                    unit:1,
                    image:classic
                },
                {
                    id:4,
                    name:'Chips (Onion)',
                    price:5,
                    unit:1,
                    image:onion
                },
                {
                    id:5,
                    name:'Triangles',
                    price:5,
                    unit:1,
                    image:triangles
                },
                {
                    id:6,
                    name:'Kurkure',
                    price:5,
                    unit:1,
                    image:kurkure
                },
                {
                    id:7,
                    name:'Wheels',
                    price:5,
                    unit:1,
                    image:wheels
                }
            ],
            cart:[],
            proceedModal:false,
            redirect:false,
            totalPrice:'',
            user:'',
            form:{
                email:'',
                pass:'',
                emailError:'',
                passError:''
            },
            isLoggedIn:false
        }
    }

    componentDidMount(){
        if(this.props.cart.length)
        {
            this.setState({proceedModal:true, cart:this.props.cart})   
        }
        else if(localStorage.cart!=null){
            this.setState({
                ...this.state,
                cart:JSON.parse(localStorage.cart)
            })
        }
        this.isAuthenticated();
    }

    addToCartHandler=(item)=>{

        //check whether choosen item is already present in cart
        let found=0;
        this.state.cart.forEach((cartItem)=>{
            let itemprice;
             if(cartItem.name===item.name)
             {
                 itemprice=this.state.items.filter(ele=>(ele.name===item.name))
                
                 //if present increase counter
                 cartItem.unit++;
                 cartItem.price=itemprice[0].price*cartItem.unit;
                 found=1;
             }
        })
        
         //if not present then push into cart
       
         if(found===0)
        {
            this.state.cart.push(item)
        }
        this.setState({cart:this.state.cart,proceedModal:true})
       
        // console.log(this.state.cart)
 
        store.dispatch(addToCart(this.state.cart))
        // this.proceedHandler();
         localStorage.setItem('cart',JSON.stringify(this.state.cart))
         localStorage.setItem('noofitems',JSON.parse(localStorage.cart).length)
         this.proceedHandler()
     }

     RemoveFromCartHandler=(item)=>{
           
            //check whether choosen item is already present in cart
     
            this.state.cart.forEach((cartItem)=>{
                let itemprice;
                 if(cartItem.name===item.name)
                 {   
                     //if present increase counter
                     if(cartItem.unit===1)
                     {   
                         let delindex = this.state.cart.indexOf(cartItem)
                        //  delete this.state.cart[delindex]
                         this.state.cart.splice(delindex,1)
                     }
                     else{
                        itemprice=this.state.items.filter(ele=>(ele.name===item.name))
                         cartItem.unit--;
                         cartItem.price=itemprice[0].price*cartItem.unit;
                         // found=1;
                     }            
                 }
            })           
            this.setState({cart:this.state.cart})
            if(this.state.cart.length===0)
            {
                this.setState({proceedModal:false})
            }
            localStorage.setItem('cart',JSON.stringify(this.state.cart))
            localStorage.setItem('noofitems',this.state.cart.length)
            this.proceedHandler()
            // console.log('length',this.state.cart.length)
            store.dispatch(RemoveFromCart(this.state.cart))
         }

          getLocation=()=>{
            //  let getloc = window.confirm('Allow Location access ');
            //  console.log(getloc)
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                  const lat = position.coords.latitude;
                  const long = position.coords.longitude;
                  let home = {latitude:lat,longitude:long}
                  localStorage.setItem('home',JSON.stringify(home))
                })
                // console.log(JSON.parse(localStorage.home));
              }
              else{
                  this.getLocation();
              }
        }
        
         getDistanceFromLatLonInKm=(lat1,lon1,lat2,lon2)=>{
            let R = 6371; // Radius of the earth in km
            let dLat = this.deg2rad(lat2-lat1);  // deg2rad below
            let dLon = this.deg2rad(lon2-lon1); 
            let a =  Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
              Math.sin(dLon/2) * Math.sin(dLon/2);
              
            let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
            let d = R * c; // Distance in km
            return Math.ceil(d);
          }
          
           deg2rad=(deg)=>{
            return deg * (Math.PI/180)
          }

        proceedHandler=()=>{
            // this.setState({redirect:true})
            this.getLocation();
            let order = JSON.parse(localStorage.cart)
            // console.log(order)
            let total=0;
            if(order.length)
            {
                order.map(ele=>total=total+ele.price)
            }
            console.log('total',total)
            localStorage.setItem('total',total)
            let home = JSON.parse(localStorage.home)
            console.log(home)
            let d = this.getDistanceFromLatLonInKm(17.6936532,75.8757191,home.latitude,home.longitude);
            console.log('disstance',d) 
            let delivery = d*5;
            localStorage.setItem('distance',d)          
            localStorage.setItem('delivery',delivery)
            localStorage.setItem('GrandTotal',delivery+total)
            localStorage.setItem('date',Date())
        }
    // const {name,unit,price,image}=props.cart;
    
    signIn=()=>{
        
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("proceed-to-checkout-butt");
        
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        
        // When the user clicks the button, open the modal 
        btn.onclick = function() {
          modal.style.display = "block";
        }
        
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target === modal) {
            modal.style.display = "none";
          }
        }

    }

     onchangeText=(name,val)=>{
         this.setState({
             ...this.state,
             form:{
                 ...this.state.form,
                 [name]:val
             }
         })
     }

     clearInputs=()=>{
         this.setState({
             ...this.state,
             form:{
                 ...this.state.form,
                 email:'',
                 pass:''
             }
         })
     }

     clearErrors=()=>{
        this.setState({
            ...this.state,
            form:{
                ...this.state.form,
                emailError:'',
                passError:''
            }
        })
     }
     closeModal=()=>{

         var modal = document.getElementById("myModal");

             modal.style.display = "none";
            setTimeout(()=>{
                alert('Welcome You have successfully Logged In')
            },1000)
         this.setState({
             isLoggedIn:true
         })
     }

    logIn=()=>{
        this.clearErrors();
        const {email, pass} = this.state.form;
        fire.auth().signInWithEmailAndPassword(email,pass)
            .then(res=>{
                this.closeModal()
                store.dispatch(changeLogging(true))
            })
            .catch(err=>{
                switch (err.code){
                    case 'auth/invalid-email':
                    case 'auth/user-disabled':
                    case 'auth/user-not-found':
                        this.setState({
                            ...this.state,
                            form:{
                                ...this.state.form,
                                emailError:err.message
                            }
                        })
                        break;
                    case 'auth/wrong-password':
                        this.setState({
                            ...this.state,
                            form:{
                                ...this.state.form,
                                passError:err.message
                            }
                        })
                        break;
                    default:
                }
            })
    }

     signUp=()=>{
        this.clearErrors();
         const {email, pass} = this.state.form;
         fire.auth().createUserWithEmailAndPassword(email,pass)
             .then(res=>{
                 this.closeModal()
                 store.dispatch(changeLogging(true))
             })
             .catch(err=>{
                 switch (err.code){
                     case 'auth/email-already-in-use':
                     case 'auth/invalid-email':

                         this.setState({
                             ...this.state,
                             form:{
                                 ...this.state.form,
                                 emailError:err.message
                             }
                         })
                         break;
                     case 'auth/weak-password':
                         this.setState({
                             ...this.state,
                             form:{
                                 ...this.state.form,
                                 passError:err.message
                             }
                         })
                         break;
                     default:
                 }
             })
     }

     logOut=()=>{
        fire.auth().signOut()
            .then(res=>{
                this.setState({
                    isLoggedIn:false
                })
                store.dispatch(changeLogging(false))
                alert('YOu have successfully Logged out')
            })
     }

    isAuthenticated=()=>{
        fire.auth().onAuthStateChanged((user)=>{
          if(user)
          {
              this.clearInputs();
              this.setState({
                  user:user
              })
          }
          else {
            this.setState({
                user:''
            })
          }
        })
        console.log('user',this.state.user)
     }
    render(){
    const {email,pass,emailError,passError} = this.state.form
        console.log('user',this.state.user)
    return(
        
        <div className='cart-container'>
            <div id="cart-header">
                <div>My Cart</div>
                { this.props.isLoggedIn?
                    (<button id='logout-btn'
                            style={{background: 'grey', color: 'white', visibility: 'visible'}}
                            onClick={this.logOut}>Log Out</button>):null
                }
            </div>

            <br/>
            <div className='item-cart-container'>
            {   
                this.state.cart.length?
                (
                <div className='cart-container'>
                    <div className='cart-table-container'>
                        <table className='cart-table'>
                            <thead>
                            <tr>
                                <th id='cart-table-head'>Product image</th>
                                <th id='cart-table-head'>Product name</th>
                                <th id='cart-table-head'>Quantity</th>
                                <th id='cart-table-head'>Price</th>
                            </tr>
                            </thead>
                            {   
                                this.state.cart.map((item,index)=><ItemCart key={index} item={item} addToCartHandler={this.addToCartHandler} RemoveFromCartHandler={this.RemoveFromCartHandler}/>)
                            }
                        </table>
                    </div>

                    <div className='price-summary-container'>
                        <div className="price-summary-box">
                            <div className="price-summary-box1">
                                <div className='price-summary'><strong style={{fontSize:'110%'}}>Price Summary</strong></div>
                            </div>
                            <div style={{display:'block',padding:'0 5%'}}>
                                <div className="">
                                    <div className="price-summary">
                                        <p className="">Cart Total </p>
                                        <p className=""><strong>₹ {localStorage.total}</strong></p>
                                    </div>
                                </div>
                            </div>
                            <div style={{display:'block',padding:'0 5%'}}>
                                <div className="">
                                    <div className="price-summary">
                                        <p className="">Delivery Charges </p>
                                        <p className=""><strong>₹ {localStorage.delivery}</strong></p>
                                    </div>
                                </div>
                            </div>
                            <div style={{display:'block',padding:'0 5%'}}>
                                <div className="">
                                    <div className="price-summary">
                                        <p className="">Grand Total </p>
                                        <p className=""><strong>₹ {localStorage.GrandTotal}</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {!this.props.isLoggedIn?
                            <button id='proceed-to-checkout-butt' onClick={this.signIn}>PROCEED TO CHECKOUT</button>
                            :
                            // <Redirect to={'/order'}/>
                            <Link type='button' id="proceed-to-order" to='/order'>PROCEED TO ORDER</Link>
                        }
                    </div>

                </div>
                )
                :null
            }  
            </div> 
            {
                this.state.proceedModal || this.state.cart.length?
                null// <button id='proceed' onClick={this.proceedHandler}>Proceed to Order</button>
                :
                (<div>
                    <div className='empty-cart-logo'></div>
                    <h2>There are no items in your cart.</h2>
                    <Link to='/'>
                    <button id='proceed'>START SHOPPING</button>
                    </Link>
                </div>)

            }
            {
                this.state.redirect? 
                <Redirect to="/order_details" />
                :null
            }
            <div id="myModal" className="modal">

                <Login
                    email={email}
                    pass={pass}
                    emailError={emailError}
                    passError={passError}
                    login={this.logIn}
                    signup={this.signUp}
                    logout={this.logOut}
                    onchangeText={this.onchangeText}
                    />


            </div>

        </div>
 )}
}
const mapStateToProps=(state)=>{
    return{
        cart:state.cart,
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(Cart);