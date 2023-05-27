import { sign } from "jsonwebtoken";
import { ObjectId } from "mongoose";

const JWT_SECRET = process.env.JWT_SECRET || "tokenLindo";

export const generateToken = (email: string) => {
    const jwt = sign({ email }, JWT_SECRET, {
        expiresIn: '1h',
    });

    return jwt;
};
