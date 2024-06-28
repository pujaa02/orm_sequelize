import * as express from "express";
const route = express.Router();
import useroperations from "../controller/useroperations";
import restaurant from "../controller/restaurant";
import driverdata from "../controller/driverdata";
import ratingdata from "../controller/ratingdata";
import orderdata from "../controller/orderdata";

route.post("/register", useroperations.register); //user register
route.get("/login/:email/:password", useroperations.login); //user login

route.post("/restaurantentry", restaurant.addrestaurant);   //add restaurant
route.post("/updaterestaurant/:restaurant_id", restaurant.updaterestaurant);   //update restaurant
route.get("/removerestaurant/:restaurant_id", restaurant.removerestaurant);  //remove restaurant
route.get("/findrestaurant/:restaurant_id", restaurant.findrestaurantwithmenu);  //find restaurant with menu data
route.post("/addmenu/:restaurant_id", restaurant.addmenu); //add menuitem
route.post("/updatemenu/:restaurant_id/:menu_id", restaurant.updatemenu); //update menuitem
route.post("/removemenu/:menu_id", restaurant.removemenu); //remove menuitem

route.post("/adddriver", driverdata.adddriver); // add driver data
route.post("/removedriver", driverdata.removedriver); // remove driver data

route.post("/addrating/:user_id/:restaurant_id/:rate", ratingdata.addrating); // add rating

route.post("/addorder/:user_id/:restaurant_id", orderdata.addorder)  //add order
route.get("/cancelorder/:user_id/:restaurant_id/:order_id", orderdata.cancelorder) // cancel orders



export default route;

