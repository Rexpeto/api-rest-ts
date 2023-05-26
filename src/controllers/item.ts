import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertItem } from "../services/item";

export const getItem = async (req: Request, res: Response): Promise<void> => {
    try {
        const { body } = req;
        res.status(200).json(body);
    } catch (e) {
        handleHttp(res, "Ocurrio un error en getItem");
    }
};

export const getItems = async (req: Request, res: Response): Promise<void> => {
    try {
    } catch (e) {
        handleHttp(res, "Ocurrio un error en getItems");
    }
};

export const updateItem = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
    } catch (e) {
        handleHttp(res, "Ocurrio un error en updateItem");
    }
};

export const setItem = async (req: Request, res: Response): Promise<void> => {
    const { body } = req;

    try {
        const response = await insertItem(body);
        res.status(200).json(response);
    } catch (e) {
        handleHttp(res, "Ocurrio un error insertando los datos", e);
    }
};

export const deleteItem = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
    } catch (e) {
        handleHttp(res, "Ocurrio un error en deleteItem");
    }
};
