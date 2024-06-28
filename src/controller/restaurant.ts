import { Request, Response } from "express";
import { MenuAttributes, RestaurantAttributes } from "../interface";
import Restaurant from "../models/Restaurant";
import Menu from "../models/menu";

const addrestaurant = async (req: Request, res: Response) => {
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
        res.json({ message: "failed", })
    }
}

const updaterestaurant = async (req: Request, res: Response) => {
    const resid = Number(req.params.restaurant_id);
    const data: RestaurantAttributes = {
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address
    }
    try {
        await Restaurant.update(data, { where: { restaurant_id: resid } });
        res.json({ message: "success", })
    } catch (error) {
        console.log(error);
        res.json({ message: "failed", })
    }
}

const removerestaurant = async (req: Request, res: Response) => {
    const res_id = req.params.restaurant_id;
    try {
        await Menu.destroy({ where: { restaurant_id: res_id } })
        await Restaurant.destroy({ where: { restaurant_id: res_id } });
        res.json({ message: "success", })
    } catch (error) {
        console.log(error);
        res.json({ message: "failed", })
    }
}

const findrestaurantwithmenu = async (req: Request, res: Response) => {
    const res_id = req.params.restaurant_id;
    try {
        const result = await Restaurant.findOne({ where: { restaurant_id: res_id } });
        if (result === null) {
            res.json({ message: "null", })
        } else {
            const menuresult = await Menu.findAll({ where: { restaurant_id: res_id } })
            res.json({ message: "success", data: menuresult })
        }
    } catch (error) {
        console.log(error);
        res.json({ message: "failed", })
    }
}

const addmenu = async (req: Request, res: Response) => {
    const data: MenuAttributes = {
        restaurant_id: Number(req.params.restaurant_id),
        item_name: req.body.item_name,
        price: req.body.price,
    }
    try {
        await Menu.create(data);
        res.json({ message: "success" })
    } catch (error) {
        console.log(error)
        res.json({ message: "failed", })
    }
}

const updatemenu = async (req: Request, res: Response) => {
    const menuid = Number(req.params.menu_id)
    const data: MenuAttributes = {
        restaurant_id: Number(req.params.restaurant_id),
        item_name: req.body.item_name,
        price: req.body.price,
    }
    try {
        await Menu.update(data, { where: { menu_id: menuid } });
        res.json({ message: "success" })
    } catch (error) {
        console.log(error)
        res.json({ message: "failed", })
    }
}

const removemenu = async (req: Request, res: Response) => {
    const menuid = Number(req.params.menu_id)
    try {
        await Menu.destroy({ where: { menu_id: menuid } });
        res.json({ message: "success" })
    } catch (error) {
        console.log(error)
        res.json({ message: "failed", })
    }
}

export default { addrestaurant, addmenu, updaterestaurant, removerestaurant, updatemenu, removemenu, findrestaurantwithmenu }