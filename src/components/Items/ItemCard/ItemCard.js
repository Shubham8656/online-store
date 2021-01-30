import React from 'react';
import  './ItemCard.css'
// import dove from '../../image/dove.jpg';
export default class ItemCard extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            AddButtonModal:true,
            count:0
        } 
    }
    componentDidMount(){
        if(this.props.item)
        {
            if(this.props.item.unit>1)
            {
                this.setState({
                    AddButtonModal:false,
                    count:this.props.item.unit
                })
            }
        }
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

    added=(item)=>{
        // alert('added')
        this.setState({
            AddButtonModal:false,
            count:this.state.count+1
        })
        this.props.addToCartHandler(item)
        this.proceedHandler()
    }

    render(){
         const {name,price,unit,image}=this.props.item;
    return(
        <div className='ItemCard-container'>
            <img src={image} alt=""/>
            <div className='item-info'>
                <span id='item-name'>
                    {name} 
                </span>
                <span id='item-unit'>
                    Unit : {unit}
                </span>
                <span id='item-price'>
                    Price : ₹ {price}
                </span>
                {this.state.AddButtonModal?
                <span id='item-cart'>
                    <button id='add-button' style={{backgroundColor:'orange',color:'white',fontWeight:'bold'}} onClick={()=>this.added({name:name,price:price,unit:unit,image:image})} >Add to cart</button>
                </span>
                :
                <div className='add-to-cart'>
                    Added to Cart
                </div>
                }
            </div>
        </div>
    );
    }
}