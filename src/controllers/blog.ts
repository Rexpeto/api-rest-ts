import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

export const getBlog = async (req: Request, res: Response): Promise<void> => {
    try {
        const { body } = req;
        res.status(200).json(body);
    } catch (e) {
        handleHttp(res, "Ocurrio un error en getBlog");
    }
};

export const getBlogs = async (req: Request, res: Response): Promise<void> => {
    try {
    } catch (e) {
        handleHttp(res, "Ocurrio un error en getBlogs");
    }
};

export const updateBlog = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
    } catch (e) {
        handleHttp(res, "Ocurrio un error en updateBlog");
    }
};

export const setBlog = async (req: Request, res: Response): Promise<void> => {
    try {
    } catch (e) {
        handleHttp(res, "Ocurrio un error en setBlog");
    }
};

export const deleteBlog = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
    } catch (e) {
        handleHttp(res, "Ocurrio un error en deleteBlog");
    }
};
