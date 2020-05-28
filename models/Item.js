const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
 totalPrice:{
   type:Number
 },
 Name:{
   type:String
 },
Email:{
  type:String
},
ingridients:{
  bacon:{
    type:Number,
    default: 0,
  },
  
  cheese:{
    type:Number,
    default: 0,
  },
  
  salad:{
    type:Number,
    default: 0,
  }
  ,
  meat:{
    type:Number,
    default: 0,
  }
}


});


module.exports = Orders = mongoose.model('Order',orderSchema);


