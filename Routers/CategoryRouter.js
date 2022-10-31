const { json } = require('body-parser');
var express = require('express');
const routes = (CategoryModel) => {
  const CategoryRouter = express.Router();
  CategoryRouter.route("/category").get((req, res) => {
    CategoryModel.find((err, result) => {
      if (err) {
        res.send(err);
      }
      res.send(result)
    });

  });
  return CategoryRouter;
}

module.exports = routes;