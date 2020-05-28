import React from 'react';
import Layout from '../src/Components/Layout/Layout'
import BurgerBuilder from '../src/Containers/Burger-Builder/BurgerBuilder'
import {Route} from 'react-router-dom';
import Checkout from './Containers/Checkout/Checkout';
import './App.css';
import Orders from './Containers/Checkout/Orders/Orders';





class App extends React.Component{
  render(){
    return(
      
      <div>
     
        <Layout>
          <Route path="/Orders" component={Orders}/>
         <Route path="/checkout"  component={Checkout}/>
          <Route path="/" exact component={BurgerBuilder}/>
         
     
    
    </Layout>
    
      </div>
    );
  }
}

export default App;
