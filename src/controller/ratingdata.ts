import { Request, Response } from "express";
import Rating from "../models/rating"
import { RatingAttributes } from "../interface";

const addrating = async (req: Request, res: Response) => {
    const data: RatingAttributes = {
        user_id: Number(req.params.user_id),
        restaurant_id: Number(req.params.restaurant_id),
        rating: Number(req.params.rate),
    }
    try {
        await Rating.create(data);
        res.json({ message: "success", })
    } catch (error) {
        console.log(error);
        res.json({ message: "failed", })
    }
}

const fetchrating = async (req: Request, res: Response) => {
    const resid = req.params.restaurant_id
    try {
        const result = await Rating.findAll({ where: { restaurant_id: resid } });
        res.json({ message: "success", data: result })
    } catch (error) {
        console.log(error);
        res.json({ message: "failed", })
    }
}

export default { addrating, fetchrating }