import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

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
    try {
    } catch (e) {
        handleHttp(res, "Ocurrio un error en setItem");
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
