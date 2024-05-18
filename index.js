const express = require('express');
const mongoose = require('mongoose');
// const Product = require('./models/product.model');
const productRoute = require('./routes/product.route.js');
const app = express();

// middlwares: allow APIs to use JSON adn urlencoded data formats
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/products', productRoute);

app.get('/', (req, res) =>{
    res.status(200).json({msg:"Jai Guru Dev"});
});

// Connect to database
mongoose.connect('mongodb://127.0.0.1:27017/express-crud')
.then(()=>{
    console.log('Connected to Database');
})
.catch(()=>{
    console.log('Connection failed');
});

// listening on PORT 3000
app.listen(3000, (req, res)=>{
    console.log('Server is running on 3000');
});