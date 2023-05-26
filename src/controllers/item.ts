import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
    insertCar,
    getCar,
    getCars,
    updateCar,
    deleteCar,
} from "../services/item";

export const getItem = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const response = await getCar(id);
        res.status(200).json(response);
    } catch (e) {
        handleHttp(res, "Ocurrio un error en getItem");
    }
};

export const getItems = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await getCars();
        res.status(200).json(response);
    } catch (e) {
        handleHttp(res, "Ocurrio un error en getItems");
    }
};

export const updateItem = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { id } = req.params;
    const { body } = req;
    try {
        const response = await updateCar(id, body);
        res.status(200).json(response);
    } catch (e) {
        handleHttp(res, "Ocurrio un error en updateItem");
    }
};

export const setItem = async (req: Request, res: Response): Promise<void> => {
    const { body } = req;

    try {
        const response = await insertCar(body);
        res.status(200).json(response);
    } catch (e) {
        handleHttp(res, "Ocurrio un error insertando los datos", e);
    }
};

export const deleteItem = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { id } = req.params;
    try {
        const response = await deleteCar(id);
        res.status(200).json({ msg: "Eliminado de manera exitosa" });
    } catch (e) {
        handleHttp(res, "Ocurrio un error en deleteItem");
    }
};
