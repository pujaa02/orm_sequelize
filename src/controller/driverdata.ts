import { Request, Response } from "express";
import Driver from "../models/driver";
import { DriverAttributes } from "../interface";

const adddriver = async (req: Request, res: Response) => {
    const data: DriverAttributes = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        location: req.body.location
    }
    try {
        await Driver.create(data);
        res.json({ message: "success" })
    } catch (error) {
        console.log(error);
        res.json({ message: "failed", })
    }
}

const removedriver = async (req: Request, res: Response) => {
    const driverid = Number(req.params.driver_id)
    try {
        await Driver.destroy({ where: { driver_id: driverid } });
        res.json({ message: "success" })
    } catch (error) {
        console.log(error);
        res.json({ message: "failed", })
    }
}

export default { adddriver, removedriver }