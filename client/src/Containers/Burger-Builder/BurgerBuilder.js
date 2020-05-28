import React from 'react'
import Aux from '../../HOC/Auxiliary';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../Components/UI/Spinner/Spinner';
import withErrorHandler from '../../HOC/WithErrorHandler/withErrorHandler';



const INGRIDIENT_PRICES = {
  salad: 20,
  cheese: 30,
  meat: 40,
  bacon: 30
}

class BurgerBuilder extends React.Component{

  // constructor(props){
  //   super(props);
  //   this.state

  // }


  state = {
    ingridients: null,
    totalPrice: 60,
    purchasable: false,
    purchasing:false,
    loading:false,
    error:false
  }



  componentDidMount(){
    axios.get('https://react-my-burger-280db.firebaseio.com/ingridients.json')
    .then(response=>{
      this.setState({ingridients: response.data});
     
    })
    .catch(error => {this.setState({error:true})})
  }
  updatePurchaseState(ingridients){
    // const ingridients={...this.state.ingridients};
    const sum = Object.keys(ingridients).map(igKey => {
      return ingridients[igKey];
    })
    .reduce((sum,el) => {
      return sum + el;
    },0);
    this.setState({purchasable: sum > 0 });
  
  }

  addIngridientHandler = (type) => {
    const oldCount= this.state.ingridients[type];
    const updatedCount = oldCount + 1;
    const updatedIngridients = {
           ...this.state.ingridients
    };
    updatedIngridients[type] = updatedCount;
    const priceAddition = INGRIDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice+priceAddition;
    this.setState({
      totalPrice:newPrice,ingridients: updatedIngridients
    }) 
    
  this.updatePurchaseState(updatedIngridients);

  }


  removeIngridientHandler = (type) => {
    const oldCount= this.state.ingridients[type];
    
    if (oldCount<=0){
    return;
    // const updatedIngridients={...this.state.ingridients};
    }
    
      const updatedCount = oldCount - 1;
      const updatedIngridients = {
              ...this.state.ingridients
      };
      updatedIngridients[type] = updatedCount;
      const priceAddition = INGRIDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice-priceAddition;
      this.setState({
        totalPrice:newPrice,ingridients: updatedIngridients
      }) 
  

   this.updatePurchaseState(updatedIngridients); 

  }

 purchaseHandler = () => {
    this.setState({ purchasing: true});
  }

  modalClosedHandler = () => {
    this.setState({purchasing: false});
  }

  modalContinueHandler = () => {
//     this.setState({loading:true})
//     const order = {
//       ingridients:this.state.ingridients,
//       price:this.state.totalPrice,
//       customer: {
//         name: 'Max',
//         address: {
//           street:'main',
//           city:'HYD'
//         },
//         email:'gokulreddy98@gmail.com'
//       },
//       deliveryMethod:'fastest'
//     }
//  axios.post('/orders.json',order)
//  .then(response=>{
//    this.setState({loading:false,purchasing:false})
//  })
//  .catch(err=> {
//   this.setState({loading:false,purchasing:false})
// });
const queryParams = [];
for(let i in this.state.ingridients){
  queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingridients[i]));
}
queryParams.push('price' +'='+  this.state.totalPrice)
const queryString = queryParams.join('&');
this.props.history.push({
  pathname: '/checkout',
  search:'?' + queryString
});
    
  }
  render(){
    const disabledInfo = {
      ...this.state.ingridients
    };
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary=null;

  

  let burger = this.state.error?<p>Ingridients can't be loaded...!!</p>:<Spinner/>

  if(this.state.ingridients){
     burger =(
      <Aux>
           <Burger ingridients={this.state.ingridients}/>
      <div>
        <p>{this.state.purchasing}</p>
        <BuildControls
        ordered={this.purchaseHandler}
         price={this.state.totalPrice}
         disable={disabledInfo}
         purchasable={this.state.purchasable}
         more={this.addIngridientHandler} 
         less={this.removeIngridientHandler} />
      </div>
      </Aux>);
        orderSummary= <OrderSummary
       price={this.state.totalPrice} 
       continue={this.modalContinueHandler}
       cancel={this.modalClosedHandler}
       ingridients={this.state.ingridients}/>;
    
  }
 
  
  if(this.state.loading){
    orderSummary = <Spinner />
  }
    return(
    <Aux>
      
      <Modal modalClosed={this.modalClosedHandler}show={this.state.purchasing}>
       {orderSummary}
      </Modal>
     {burger}
    </Aux>
    );
  }
}



export default withErrorHandler(BurgerBuilder,axios);