// import fs from "fs";
// import path from "path";
import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize-typescript";
import User from "./user";
import Restaurant from "./Restaurant";
import Address from "./address";
import Driver from "./driver";
import Menu from "./menu";
import Rating from "./rating";
import Payment from "./payment";
import Order from "./order";


const initSequalize = () => {
  // const _basename = path.basename(module.filename);
  const sequelize = new Sequelize(process.env.DATABASE as string, process.env.DBUSER as string, process.env.DBPASSWORD as string, {
    host: process.env.HOST,
    dialect: "mysql",
    port: 3306,
    logging:false
  });

  sequelize
    .authenticate()
    .then(() => console.log(`Successfully connected to database!`))
    .catch((err) => console.log(`Something went wrong ${err.message}`));

  sequelize.addModels([User, Restaurant, Driver, Payment, Order, Rating, Address, Menu]);
  return sequelize;
};
const db = {
  connect: initSequalize(),

};
export default db;
