import React from 'react';
import ItemCard from '../../ItemCard/ItemCard';
// import  './HairOil.css';
import {addToCart} from '../../../../redux/Action/Action';
import { connect } from 'react-redux';
import store from '../../../../redux/Store/Store';
import parachute from '../../../image/parachute.jpg';
import jasmine from '../../../image/jasmine.jpg';
import amla from '../../../image/amla.jpg';
import indu from '../../../image/induleka.jpg';

 class HairOil extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[
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
                }
            ],
            cart:[]
        }  
        this.addToCartHandler=this.addToCartHandler.bind(this);
    }

    componentDidMount=()=>{
        if(this.props.cart.length)
        {
            this.setState({cart:this.props.cart})
        }
    } 

    addToCartHandler=(item)=>{
        // console.log('in add to cart')
       //check whether choosen item is already present in cart
       let found=0;
       if(this.state.cart.length)
       {
        this.state.cart.forEach((cartItem)=>{
            
                if(cartItem.name===item.name)
                {
                    //if present increase counter
                    cartItem.unit++;
                    cartItem.price=item.price*cartItem.unit;
                    found=1;
                }
        })
       }
        //if not present then push into cart
      
        if(found===0)
       {
           this.state.cart.push(item)
       }
       this.setState({cart:this.state.cart})
       store.dispatch(addToCart(this.state.cart))
        localStorage.setItem('cart',JSON.stringify(this.state.cart))
        this.proceedHandler()
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
        // localStorage.setItem('date',Date())
    }

    render(){
    return(
        <div className='container' style={{padding:'2%'}}>
            
            {
                this.state.items.length?
                this.state.items.map((item,index)=>(
                    <ItemCard key={index} item={item} addToCartHandler={this.addToCartHandler} />
                ))
                :
                alert('items not available')
            }

        </div>
    );
    }
}
const mapStateToProps=state=>{
    return{
        cart:state.cart
    }
}
export default connect(mapStateToProps)(HairOil);