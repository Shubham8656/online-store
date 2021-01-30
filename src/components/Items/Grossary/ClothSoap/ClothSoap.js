import React from 'react';
import ItemCard from '../../ItemCard/ItemCard';
import dove from '../../../image/dove.jpg';
import santoor from '../../../image/santoor.jpg';
import lifebouy from '../../../image/Lifebouy.webp';
import lux from '../../../image/lux.jpg';
import godrej from '../../../image/godrej.jpg';
import {addToCart} from '../../../../redux/Action/Action';
import { connect } from 'react-redux';
import store from '../../../../redux/Store/Store';

 class ClothSoap extends React.Component{
    constructor(props){
        super(props);
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
                    name:'Lifebouy',
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
export default connect(mapStateToProps)(ClothSoap);