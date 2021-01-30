import React from 'react';
import ItemCard from '../../ItemCard/ItemCard';
// import  './Soap.css';
import tomato from '../../../image/tomato.jpg';
import chilli from '../../../image/chilli.jpg';
import classic from '../../../image/classic_chip.jpg';
import onion from '../../../image/onion.jpg';
import wheels from '../../../image/wheels.jpg';
import triangles from '../../../image/triangles.jpg';
import kurkure from '../../../image/masala_kur.jpg';
import {addToCart} from '../../../../redux/Action/Action';
import { connect } from 'react-redux';
import store from '../../../../redux/Store/Store';

 class ChipsKurkure extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[
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
        // console.log(localStorage.cart)
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
export default connect(mapStateToProps)(ChipsKurkure);