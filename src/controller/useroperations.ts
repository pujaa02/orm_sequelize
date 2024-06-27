import { Request, Response } from "express";
import User from "../models/user";
import { AddressAttributes, UserAttributes } from "../interface";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import Address from "../models/address";

function createRandomString(length: number): string {
    const chars: string =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result: string = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

const register = async (req: Request, res: Response) => {
    const accesskey: string = createRandomString(12);
    bcrypt.hash(req.body.password, 7, async (error, hashedPassword) => {
        const data: UserAttributes = {
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            phone: req.body.phone,
            gender: req.body.gender,
            bd: (req.body.bd),
            password: hashedPassword,
            access_key: accesskey
        };
        if (error) {
            console.log(error);
        }
        try {
            const insert_user_data: User = await User.create(data);
            const finalres: UserAttributes = JSON.parse(JSON.stringify(insert_user_data));
            if (finalres.user_id) {
                const address_data: AddressAttributes = {
                    user_id: finalres.user_id,
                    city: req.body.city,
                    state: req.body.state,
                    street: req.body.street,
                    pincode: req.body.pincode,
                }
                await Address.create(address_data);
            }
            res.json({ message: "success", actcode: accesskey, user_id: finalres.user_id });
        } catch (error) {
            console.log(error);
            res.json({ message: "failed" });
        }
    })
}
const login = async (req: Request, res: Response) => {
    const email: string = req.params.email;
    const pass: string = req.params.password;
    const jwtsecret: string | undefined = process.env.JWT_SECRET;
    try {
        const result: User | null = await User.findOne({ where: { email: email } });
        if (result?.dataValues) {
            const isPassSame: boolean = await bcrypt.compare(pass, result?.dataValues.password);
            if (isPassSame === true) {
                const payload = {
                    id: result?.dataValues.user_id,
                    email: result?.dataValues.email
                }
                const token: string = jwt.sign(
                    payload,
                    jwtsecret as string,
                    { expiresIn: "1h" },
                );
                res.cookie("token", token, { httpOnly: false, secure: true, maxAge: 24 * 60 * 60 * 1000, sameSite: 'none' }).json({ msg: "Success", token, user_id: result?.dataValues.user_id, name: result?.dataValues.fname });
            } else {
                res.json({ msg: "wrong Data" })
            }
        } else {
            res.json({ msg: "wrong Data" })
        }
    } catch (error) {
        res.json({ msg: "No data found!!" })
    }
};
export default { register, login };

