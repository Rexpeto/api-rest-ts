import { NextFunction, Request, Response } from "express";
import { verifiedToken } from "../utils/jwt.handle";

export const checkJWT = (req: Request, res: Response, next: NextFunction) => {
    try {
        const jwtUser = req.headers.authorization || '';

        if (!jwtUser) return res.status(403).json({ msg: "Debe tener una sesión abierta" });

        const jwt = jwtUser.split(' ').pop();
        const isOk = verifiedToken(`${jwt}`);

        if (isOk) {
            next();
        } else {
            res.status(403).json({ msg: "Token inválido" })
        }

    } catch (e) {
        res.status(400).json({ msg: "Usuario no válido" })
    }
}
