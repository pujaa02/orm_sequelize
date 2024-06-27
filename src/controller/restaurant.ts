import { Request, Response } from "express";
import { RestaurantAttributes } from "../interface";
import Restaurant from "../models/Restaurant";

const restaurantentry = async (req: Request, res: Response) => {
    const data: RestaurantAttributes = {
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address
    }
    try {
        const insert_restaurant_date = await Restaurant.create(data);
        const result = JSON.parse(JSON.stringify(insert_restaurant_date))
        res.json({ message: "success", restaurant_id: result.restaurant_id })
    } catch (error) {
        console.log(error);

    }
}

export default { restaurantentry }