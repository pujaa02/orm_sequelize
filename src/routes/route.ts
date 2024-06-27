import * as express from "express";
const route = express.Router();
import useroperations from "../controller/useroperations";
import restaurant from "../controller/restaurant";

route.post("/register", useroperations.register);
route.get("/login/:email/:password", useroperations.login);
route.post("/restaurantentry", restaurant.restaurantentry);

export default route;
