const db = require("./../models");

const Product = db.products;
const Review = db.reviews;
// create a new product

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({ msg: "created", product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "failed to create internal server error" });
  }
};

// get all

exports.getAllProducts = async (req, res) => {
  try {
    const product = await Product.findAll({});
    res.status(200).json({ msg: "success", data: product.length, product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "failed to create internal server error" });
  }
};

// get one product

exports.getOneProducts = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findOne({ where: { id: productId } });
    res.status(200).json({ msg: "success", product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "failed to create internal server error" });
  }
};

// update

exports.updateProducts = async (req, res) => {
  try {
    const productid = req.params.id;
    const product = await Product.update(req.body, {
      where: {
        id: productid,
      },
    });
    res.status(200).json({ msg: "updated", product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "failed to create internal server error" });
  }
};

// delete

exports.deleteProducts = async (req, res) => {
  try {
    const productId = req.params.id;
    await Product.destroy({ where: { id: productId } });
    res.status(200).json({ msg: "deleted" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "failed to create internal server error" });
  }
};
// published

exports.publishedProducts = async (req, res) => {
  try {
    const product = await Product.findAll({ where: { published: true } });
    res.status(200).json({ msg: "success", product });
  } catch (error) {
    console.log(error);
    // res.status(400).json({ msg: "failed to create internal server error" });
  }
};

// connect one to many relation product
exports.getProductReviews = async (req, res) => {
  const data = await Product.findAll({
    include: [
      {
        model: Review,
        as: "review",
      },
    ],
    where: {
      id: 2,
    },
  });
  res.status(200).json(data);
};
