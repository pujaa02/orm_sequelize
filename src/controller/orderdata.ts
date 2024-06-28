import { Request, Response } from "express";
import { OrderAttributes, PaymentAttributes } from "../interface";
import Order from "../models/order";
import Payment from "../models/payment";


const addorder = async (req: Request, res: Response) => {
    const data: OrderAttributes = {
        user_id: Number(req.params.user_id),
        restaurant_id: Number(req.params.restaurant_id),
        order_total: Number(req.body.order_total),
        delivery_status: "pending",
        driver_id: 1,
    }
    try {
        const result = await Order.create(data);
        const finalres: OrderAttributes = JSON.parse(JSON.stringify(result));
        if (finalres.order_id) {
            const paymentdata: PaymentAttributes = {
                order_id: finalres.order_id,
                payment_method: req.body.payment_method,
                amount: req.body.amount,
                status: "success",
            }
            await Payment.create(paymentdata)
        }
        res.json({ message: "success" })
    } catch (error) {
        console.log(error);
        res.json({ message: "failed", })
    }
}

const cancelorder = async (req: Request, res: Response) => {
    try {
        const result = await Order.findAll({ where: { user_id: req.params.user_id, restaurant_id: req.params.restaurant_id, order_id: req.params.order_id } })
        if (result) {
            await Order.destroy({ where: { order_id: req.params.order_id } });
            res.json({ message: "success" })
        }
    } catch (error) {
        console.log(error);
        res.json({ message: "failed", })
    }
}


export default { addorder, cancelorder }