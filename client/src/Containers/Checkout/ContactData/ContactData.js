import React from 'react';
import Button from '../../../Components/UI/Button/Button';
import classes from './ContactData.css';
import axios from 'axios';
import Spinner from '../../../Components/UI/Spinner/Spinner'; 
import Input from '../../../Components/UI/Input/Input';



class ContactData extends React.Component{
state ={
  name : '',
  email: '',
  address:{
    street: '',
    postalcode:''

  },
  loading: false
}
orderHandler = (e) =>{
  e.preventDefault();
  this.setState({loading:true})
       const order = {
         ingridients:this.props.ingridients,
         price:this.props.price,
         customer: {
           name: 'Gokul',
           address: {
             street:'main',
             city:'HYD'
           },
           email:'gokulreddy98@gmail.com'
         },
         deliveryMethod:'fastest'
      }
      axios.post('http://localhost:5000/orders',order)
        .then(response=>{
          this.setState({loading:false,purchasing:false});
         this.props.history.push('/');

        })
        .catch(err=> {
         this.setState({loading:false,purchasing:false});
       });
  
}
  

render(){

  let form = (  <form>
    <Input inputtype="input" type="text" name="name" placeholder="Your Name" />
    <Input inputtype="input"  type="email" name="email" placeholder="Your Email" />
      <Input inputtype="input"  type="text" name="street" placeholder="Your Street" />
      <Input inputtype="input" type="text" name="postal" placeholder="Pin Code" />
       <Button btntype="Success" clicked={this.orderHandler}>ORDER</Button>
    </form>
    )

    if(this.state.loading){
      form = <Spinner />;
    }
  return(<div className={classes.ContactData}>
    <h4>
      Enter your contact data
    </h4>
    <button onClick={this.orderHandler}>Continue</button>

  </div>)
}
}

export default ContactData;