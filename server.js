const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
//const orders = require('./models/item');
var cors = require('cors');
const rOrders= require('./Routes/orders');
const app= express();

app.use(bodyParser.json());

const uri = require('./config/keys').monogoURI;
app.use(cors());
 mongoose.connect(uri)
 .then((db)=>{
  console.log('connected to server');
/*
orders.create({
    totalPrice:0,
    Name: 'Max',
    Email:'gokulreddy98@gmail.com',
    
    ingridients:{
      bacon: 1,
      salad: 1,
      cheese:1,
      meat: 0
    },
    
  })


  .then((order)=>{
    console.log(order);
    orders.find({}).exec()
    .then((orders)=>{
      console.log(orders);
      return order.remove({});
    })
    .then(()=>{
      return mongoose.connection.close();
    })
    .catch ((err)=>{
      console.log(err);
    })

  })*/
 })
.catch(err=>console.log(err));

app.use('/Orders',rOrders);
const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`server started on port ${port}`))