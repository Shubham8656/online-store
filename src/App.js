import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import Category from './components/Category/Catagory';
import Header from './components/Header/Header';
import Kirana from './components/Items/Kirana/Kirana';
import Grossary from './components/Items/Grossary/Grossary';
import PersonalCare from './components/Items/PersonalCare/PersonalCare';
// import Navbar from './components/Navbar/Navbar';
// import Home from './components/Home/Home';
import Soap from './components/Items/PersonalCare/Soap/Soap';
import Cart from './components/Cart/Cart';
import Order from './components/Order/Order';
import Shampo from './components/Items/PersonalCare/Shampo/Shampo';
import HairOil from './components/Items/PersonalCare/HairOil/HairOil';
import ChipsKurkure from './components/Items/Grossary/ChipsKurkure/ChipsKurkure';
// import Func from './components/Funct';
import Orders from './components/Order/Order';

function App() {
  return (
      <div className="App">
        {/* <Func text='HI'/> */}
        <Header/>
        {/* <Navbar/> */}
        <Switch>
          <Route path='/personalCare' component={PersonalCare}/>
          <Route path='/soap' component={Soap}/>
          <Route path='/' exact component={Category}/>
          {/* <Route path='/Category' component={Category} /> */}
          <Route path='/kirana' component={Kirana}/>
          <Route path='/grossary' component={Grossary} />
          <Route path='/cart' component={Cart} />
          <Route path='/order_details' component={Order} />
          <Route path='/shampo' component={Shampo} />
          <Route path='/hairoil' component={HairOil} />
          <Route path="/chips_kurkure" component={ChipsKurkure} />
           <Route path='/order' component={Orders} />
        </Switch>        
      </div>
  );
}

export default App;
