import { Sequelize, DataTypes } from "sequelize";

import writer from "./writers";
import book from "./books";
import comments from "./comments";

/**
 * https://www.freesqldatabase.com/account/
 * database connection details
 */
const sequelize = new Sequelize("sql6686468", "sql6686468", "FvvI3uQkA4", {
  host: "sql6.freesqldatabase.com",
  dialect: "mysql",
  //logging: false
});

/**
 * database connection authentication.
 */
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((err) => {
    console.log("Database connection has been fail");
  });

/**
 * db reference association.
 */
const db: any = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

/**
 * models association with database.
 */
db.writer = writer(sequelize, DataTypes);
db.book = book(sequelize, DataTypes);
db.comments = comments(sequelize, DataTypes);

/**
 * database relationship
 */
db.writer.hasMany(db.book, { foreignKey: "writerId", constraints: false });
db.book.belongsTo(db.writer, { foreignKey: "writerId", constraints: false });

db.book.hasMany(db.comments, { foreignKey: "bookId", constraints: false });
db.comments.belongsTo(db.book, { foreignKey: "bookId", constraints: false });
db.comments.belongsTo(db.writer, { foreignKey: "userId", constraints: false, as:"commetedBy"});

/**
 * database sync
 */
db.sequelize.sync({ force: false }).then(() => {
  console.log("DB has been re-synced");
});

export default db;
