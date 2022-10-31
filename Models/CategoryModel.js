var mongoose=require('mongoose');
 
var CategoryModel = new mongoose.Schema({
    Name:String
});
 
module.exports = mongoose.model(
    'category', CategoryModel, 'category');