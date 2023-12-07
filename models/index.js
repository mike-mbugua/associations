const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("./../config/db");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

sequelize
  .authenticate()
  .then(() => console.log(`connected to the database`))
  .catch((err) => console.log(err));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.reviews = require("./Review")(sequelize, DataTypes);
db.products = require("./Product")(sequelize, DataTypes);

db.sequelize
  .sync({ force: false })
  .then(() => console.log(`Resync done`))
  .catch((err) => console.log(err));

db.products.hasMany(db.reviews, {
  foreignKey: "productId",
  as: "review",
});
db.reviews.belongsTo(db.products, {
  foreignKey: "productId",
  as: "product",
});
module.exports = db;
