const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand')
  .then(() => {
    console.log("Farmstand Open")
  })
  .catch(err =>{
    console.log("Oh no there is a farm error")
    console.log(err)
  })

  // const p = new Product({
  //   name: "Ruby Grapefruit",
  //   price: 1.99,
  //   category: 'fruit'
  // })


  // p.save().then(p =>{
  //   console.log(p)
  // })
  // .catch(e =>{
  //   console.log("There is an error")
  //   console.log(e)
  // })

  const seedProducts = [
    {
    name: 'Fairy Eggplant',
    price: 1.00,
    category: 'vegetable'
    },
    {
    name: 'Organic Melon',
    price: 4.99,
    category: 'fruit'
    },
    {
    name: 'Mini Canteloupe',
    price: 3.99,
    category: 'fruit'
    },
    {
    name: 'Mini Seedless Watermelon',
    price: 1.00,
    category: 'fruit'
    },
    {
    name: 'Organic Celery',
    price: 1.50,
    category: 'vegetable'
    },
    {
    name: 'Organic Whole Milk',
    price: 2.99,
    category: 'dairy'
    },
  ]
  
  
  Product.insertMany(seedProducts)
    .then(res =>{
      console.log(res)
    })
    .catch(e =>{
      console.log(e)
    })