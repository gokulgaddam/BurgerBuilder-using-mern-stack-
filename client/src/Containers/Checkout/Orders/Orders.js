import React from 'react';
import Order from './Order.js';
import axios from '../../../axios-orders';
import WithErrorHandler from '../../../HOC/WithErrorHandler/withErrorHandler';
class Orders extends React.Component{
  state ={
    orders: [],
    loading: true
  }


  componentDidMount(){
    axios.get('http://localhost:5000/Orders')
    .then(res => {
    /*  const fetchedOrders = [];
      for (let __id in res.data){
        fetchedOrders.push({
          ...res.data[__id],
          id: __id
        });

      }
      */
      this.setState({loading: false,orders: res.data});
      
      console.log("these are orders:"+this.state.orders[0]);
    })
    .catch(err=>{
      this.setState({loading: false});
    })
    
  }

  
  render(){
   var key=0;
    return(
      <div>
       {this.state.orders.map(order => (
         <Order
         key={key++}
         ingridients={order.ingridients}
         price={order.totalPrice}
         />
    ))
       
       }
      </div>
    );



  }
}


export default WithErrorHandler(Orders, axios);