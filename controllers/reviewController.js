const db = require("./../models");

const Review = db.reviews;

// create a new review

exports.createReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(200).json({ msg: "created", review });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "failed to create internal server error" });
  }
};

// get all

exports.getAllReviews = async (req, res) => {
  try {
    const review = await Review.findAll({});
    res.status(200).json({ msg: "success", data: review.length, review });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "failed to create internal server error" });
  }
};

// get one review

exports.getOneReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const review = await Review.findOne({ where: { id: reviewId } });
    res.status(200).json({ msg: "success", data: review.length, review });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "failed to create internal server error" });
  }
};

// update

exports.updateReview = async (req, res) => {
  try {
    const reviewid = req.params.id;
    const review = await Review.update(req.body, {
      where: {
        id: reviewid,
      },
    });
    res.status(200).json({ msg: "updated", data: review.length, review });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "failed to create internal server error" });
  }
};

// delete

exports.deleteReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    await Review.destroy({ where: { id: reviewId } });
    res.status(200).json({ msg: "deleted" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "failed to create internal server error" });
  }
};
