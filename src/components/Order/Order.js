import React, { Component } from 'react';
import Axios from 'axios';
// import { Redirect } from 'react-router';
// import {Link,Redirect} from 'react-router-dom';
import  './Order.css';
// import firebase from '../../Firebase';
class Order extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            mobile:'',
            address:'',
            nameerror:'',
            mobileerror:'',
            addresserror:'',
            totalPrice:''
        }
    }

    submitHandler=()=>{

        let name=document.getElementById('name').value;
        let mobile=document.getElementById('mobile').value;
        // let email=document.getElementById('email').value;
        let address=document.getElementById('address').value;
        if(name.length===0)
        {
            this.setState({nameerror:'Invalid Name'})
        }
        else
        {
            this.setState({nameerror:''})
        }

        if(mobile.length!==10)
        {
            this.setState({mobileerror:'Invalid mobile no.'})
        }
        else
        {
            this.setState({mobileerror:''})
        }

        if(address.length===0)
        {
            this.setState({addresserror:'Invalid Adress'})
        }
        else
        {
            this.setState({addresserror:''})
        }
       
        // alert('submitted')
        if(name.length && mobile.length===10 && address.length)
        {
            let order = JSON.parse(localStorage.cart)
            // console.log(order)
            localStorage.setItem('mobile',mobile)
            let total=0;
            if(order.length)
            {
                order.map(ele=>total=total+ele.price)
            }
            this.setState({totalPrice:total})
            Axios.post('https://onlinestore-df8c7.firebaseio.com/orders.json',{order:order,name:name,mobile:mobile,address:address,Home:localStorage.home,total:total,delivery:localStorage.delivery,distance:localStorage.distance,GrandTotal:localStorage.GrandTotal,date:localStorage.date})
            .then((res)=>{
                console.log(res.data)
            })
            .catch((err)=>console.log(err))  
            alert('Order has been placed...')
            console.log(this.props)
            this.props.history.push('/')
        }
    }
    render(){
        // console.log(JSON.parse(localStorage.cart))
    return(
        <div className='user-detail'>
            <div className='info-container' >
                <div id='label-input'>                
                    <label >Name  </label>
                    <input type='text' id='name' placeholder='Full Name...'/>
                </div>
                <div style={{marginBottom:'10px',marginTop:'-10px',color:'red',fontSize:'85%'}}>{this.state.nameerror}</div>
                {/* <br/> */}
                <div id='label-input'>
                    <label >Mobile</label>
                    <input type='number' id='mobile' placeholder='Mobile number...'/>
                </div>
                <div style={{marginBottom:'10px',marginTop:'-10px',color:'red',fontSize:'85%'}}>{this.state.mobileerror}</div>
                <div id='label-input'>
                    <label >Address</label>
                    <input type='text' id='address' placeholder='Address...'/>
                </div>
                <div style={{marginBottom:'10px',marginTop:'-10px',color:'red',fontSize:'85%'}}>{this.state.addresserror}</div>
                
                <div style={{fontSize:'110%',}}>Total Price : Rs {localStorage.total}  +  {localStorage.delivery} </div>
                <br/>
                <div style={{fontSize:'120%',fontWeight:'500'}}>Grand Total Price : Rs {localStorage.GrandTotal} </div>
                <br/>
                <div style={{fontSize:'90%',color:'blue'}}>Delivery charges applies based on user location</div>
                <br/>
                <div style={{fontSize:'90%',color:'grey'}}>For 1km - 5 Rs</div>
                <button id='order' onClick={this.submitHandler}>Order</button>
            </div>
        </div>
    );
    }
}
export default Order;