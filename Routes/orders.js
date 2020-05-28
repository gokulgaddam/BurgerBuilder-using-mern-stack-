const express = require('express');

const router = express.Router();
const order= require('../models/Item');

router.get('/',(req,res)=>{
  

 order.find({}).then(orders=> res.json(orders))
});

router.post('/',(req,res)=>{
  console.log(req.body);
  var newOrder= new order({
    totalPrice: req.body.price,
    Name:req.body.customer.name,
   Email:req.body.customer.email,
   ingridients:req.body.ingridients
  })

  newOrder.save()
  .then(order=>res.json(order));

})


module.exports = router;