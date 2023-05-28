import { NextFunction, Request, Response } from "express";
import { verifiedToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
    user?: string | JwtPayload;
}

export const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtUser = req.headers.authorization || '';

        if (!jwtUser) return res.status(403).json({ msg: "Debe tener una sesión abierta" });

        const jwt = jwtUser.split(' ').pop();
        const isUser = verifiedToken(`${jwt}`);

        if (isUser) {
            req.user = isUser;
            next();
        } else {
            res.status(403).json({ msg: "Token inválido" })
        }

    } catch (e) {
        res.status(400).json({ msg: "Usuario no válido" })
    }
}
