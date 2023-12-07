const productController = require("./../controllers/productController");

const express = require("express");
const router = express.Router();

router.route("/").post(productController.createProduct);
router.route("/productReviews").get(productController.getProductReviews);
router
  .route("/:id")
  .get(productController.getOneProducts)
  .put(productController.updateProducts)
  .delete(productController.deleteProducts);
router.route("/published").get(productController.publishedProducts);

module.exports = router;
