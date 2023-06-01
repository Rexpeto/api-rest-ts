import { JwtPayload, sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "tokenLindo";

export const generateToken = (email: string) => {
    const jwt = sign({ email }, JWT_SECRET, {
        expiresIn: '1h',
    });

    return jwt;
};

export const verifiedToken = (token: string) => {
    const isOk: string | JwtPayload = verify(token, JWT_SECRET);

    return isOk;
}
