import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize-typescript";
import User from "./user";
import Restaurants from "./Restaurant";
import Drivers from "./driver";
import Payments from "./payment";
import Orders from "./order";
import Rating from "./rating";

const initSequalize = () => {
  const sequelize = new Sequelize({
    database: process.env.DATABASE,
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    host: process.env.HOST,
    dialect: "mysql",
    port: 3306,
    models: [User, Restaurants, Drivers, Payments, Orders, Rating],
  });

  sequelize
    .authenticate()
    .then(() => console.log(`Successfully connected to database!`))
    .catch((err) => console.log(`Something went wrong ${err.message}`));

  return sequelize;
};

const db = {
  connect: initSequalize(),
};

export default db;