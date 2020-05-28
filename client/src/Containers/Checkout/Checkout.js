import React from 'react';
import CheckoutSummary from '../../Components/Order/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';
import { Route } from 'react-router-dom';

class Checkout extends React.Component{

state={
  ingridients: null,
  price: 0
}

componentWillMount() {
  const query = new URLSearchParams(this.props.location.search);
  const ingridients = {};
  let price;

  for(let param of query.entries()){
    if(param[0] === 'price'){
    price = param[1];
    }
    else{
      ingridients[param[0]] = +param[1];
    }

  }
  this.setState({ingridients:ingridients,price: price});
}

onCheckoutCancelHandler=( ) => {
  this.props.history.goBack();
}

onCheckoutContinueHandler=( ) => {
  this.props.history.replace('/checkout/contact-data');
}
  render(){
    return(
      <div>
        <CheckoutSummary onCheckoutCancel={this.onCheckoutCancelHandler}
        onCheckoutContinue={this.onCheckoutContinueHandler}
        ingridients={this.state.ingridients}/>
        <Route path ={this.props.match.path+'/contact-data'} render={(props)=> (<ContactData ingridients={this.state.ingridients} 
                   price ={this.state.price}  {...props}/>)}/>
      </div>
    )
  }
}

export default Checkout;