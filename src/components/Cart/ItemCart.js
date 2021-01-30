import React from 'react';
import  '../Items/ItemCard/ItemCard.css'
import './ItemCart.css';
// import dove from '../../image/dove.jpg';
export default class ItemCart extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            count:0
        } 
    }   

    added=(item)=>{
        let counter = this.state.count;
        counter++;
        this.setState({
            count:counter
        })
        this.props.addToCartHandler(item)
    }

    subtracted=(item)=>{
        if(this.state.count>0)
        {   
            let counter = this.state.count;
            counter--;
            this.setState({
                count:counter
            })
            this.props.RemoveFromCartHandler(item)   
        }
        else
        {
            this.props.RemoveFromCartHandler(item)
        }
    }

    componentDidMount(){
        this.setState({
            count:this.props.item.unit
        })
    }

    render(){
         const {name,price,unit,image}=this.props.item;
     return(

        <>
        <tbody>
        <tr>
            <td>
                <img src={image} alt="" id='cart-image'/>
            </td>
            <td>
                {name}
            </td>
            <td>
                <div className='counter-button'>
                    <div id='increment' onClick={()=>this.subtracted({name:name,price:price,unit:unit,image:image})}>-</div>
                    <div id='count'>{unit}</div>
                    <div id='decrement' onClick={()=>this.added({name:name,price:price,unit:unit,image:image})}>+</div>
                </div>
            </td>
            <td>
            ₹ {price} 
            </td>
        </tr>
        </tbody>
            {/*<div className='horizontal-line'></div>*/}

        </>
    );
    }
}