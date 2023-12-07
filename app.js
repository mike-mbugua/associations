const port = 8080;
const express = require("express");
const app = express();

const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

app.use(express.json());

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/reviews", reviewRoutes);
app.listen(port, console.log(`server runnin on port ${port}`));
