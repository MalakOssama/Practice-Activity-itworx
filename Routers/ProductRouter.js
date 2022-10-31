const { json } = require('body-parser');
const { response } = require('express');
var express = require('express');
const router = require('../api');
const routes = (ProductModel) => {
  const ProductRouter = express.Router();
  ProductRouter.route("/products").get((_,res) => {
    ProductModel.find(function(err, result){
      let response = {
        success: err ? false : true,
        result,
        message: err? err.message : "Request Sent Successfully"
      }

      res.send(response)
    });

  });
  ProductRouter
    .route("/products/:id")
    .get((req, res) => {
      ProductModel.findById(req.params.id, function(err, result){
        let response = {
          success: err ? false : true,
          result,
          message: err? err.message : "Request Sent Successfully"
        }

        res.send(response)
      });
    });
  ProductRouter
    .route("/products/category/:id")
    .get((req, res) => {
      ProductModel.find({ categoryId: req.params.id }, function(err, result) {

        let response = {
          success: err ? false : true,
          result,
          message: err? err.message : "Request Sent Successfully"
        }

        res.send(response)
      });
    });

  ProductRouter.put('/products/:id', async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    ProductModel.findByIdAndUpdate(id, updatedData,{new:true}, function (err, result) {

      let response = {
        success: err ? false : true,
        result,
        message: err ? err.message : "Request sent successfully",
      }

      console.log(response);
      res.send(response)
    })

  })
  ProductRouter.post("/products", (req, res, next) => {
    const product = new ProductModel(req.body);
    product.save(function (err, result) {

      let response = {
        success: err ? false : true,
        result,
        message: err ? err.message : "Request sent successfully",
      }


      res.send(response)
    });
  })

  return ProductRouter;
}

module.exports = routes;