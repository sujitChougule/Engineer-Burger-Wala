import { asyncError } from "../middlewares/errorMiddleware.js";
import {Order} from "../models/Order.js";


export const placeOrder =asyncError (async( req,res,next)=>{
    const {
        shippingInfo,
        orderItems,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalAmount,
    }=req.body;
    const user= "req.user_id";

    const orderOptions={
        shippingInfo,
        orderItems,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalAmount,
        user,
    };
    await Order.create(orderOptions);
    res.status(200).json({
        success:true,
        message:"Order placed thorough COD"
    })
});