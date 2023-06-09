import { Request, Response } from "express";
import { loginUser, newUser } from "../services/auth";
import { handleHttp } from "../utils/error.handle";

export const registerCrtl = async ({ body }: Request, res: Response) => {
    const { email, password } = body;

    try {
        if (!email) return res.status(404).json({ msg: "Debe colocar un email" });
        if (!password) return res.status(404).json({ msg: "Debe colocar una contraseña" });

        const response = await newUser(body);
        res.status(200).json(response);
    } catch (e) {
        handleHttp(res, "Email o Contraseña inválida", e);
    }
};

export const loginCtrl = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const response = await loginUser({ email, password });
        res.status(200).json(response);
    } catch (e) {
        handleHttp(res, "Email o Contraseña inválida", e);
    }
};
