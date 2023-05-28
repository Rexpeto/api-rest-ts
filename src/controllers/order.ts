import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getOrdersAll } from "../services/order";

export const getOrders = async (req: Request, res: Response) => {
    try {
        const orders = await getOrdersAll();
        res.status(200).json(orders);
    } catch (e) {
        handleHttp(res, 'Oops!! ocurrio un error', e);
    };
};
