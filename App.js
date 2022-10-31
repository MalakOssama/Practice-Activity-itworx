const express=require('express');

const bodyParser=require('body-parser');

const api = require('./Api');

const port=3000;

const app=express();

var CategoryModel = require('./Models/CategoryModel');

var ProductModel = require('./Models/ProductModel');

var CategoryRouter = require('./Routers/CategoryRouter')(CategoryModel);  

var ProductRouter = require('./Routers/ProductRouter')(ProductModel);
const cors=require('cors')
app.use(cors());  

app.listen(port, function() {

    console.log("Server is listening at port:" + port);

});

 

// Parses the text as url encoded data

app.use(bodyParser.urlencoded({extended: true}));

 

// Parses the text as json

app.use(bodyParser.json());

app.use('/',CategoryRouter,ProductRouter);

app.use('/api', api);