const { ObjectID } = require('bson');
var mongoose=require('mongoose');
 
var ProductModel = new mongoose.Schema({
    categoryId:ObjectID,
    ImgUrl:String,
    Name:String,
    Price:Number,
    Quantity:Number
});
 
module.exports = mongoose.model(
    'products', ProductModel, 'products');