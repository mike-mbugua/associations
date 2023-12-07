const express = require("express");
const router = express.Router();

const reviewController = require("../controllers/reviewController");
router
  .route("/")
  .post(reviewController.createReview)
  .get(reviewController.getAllReviews);
router
  .route("/:id")
  .get(reviewController.getOneReview)
  .put(reviewController.updateReview)
  .delete(reviewController.deleteReview);

module.exports = router;
