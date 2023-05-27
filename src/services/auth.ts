import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";

export const newUser = async ({ name, age, email, password }: User) => {
    const ckeck = await UserModel.findOne({ email });

    if (ckeck) return "El usuario ya existe";

    const passwordHash = await encrypt(password);

    const registerUser = await UserModel.create({
        name,
        age,
        email,
        password: passwordHash,
    });

    return registerUser;
};

export const loginUser = async ({ email, password }: Auth) => {
    const check = await UserModel.findOne({ email });

    if (!check) return "Datos inválidos";

    const passwordHash = check.password;
    const isCorrect = await verified(password, passwordHash);

    if (!isCorrect) return "Contraseña incorrecta";

    return check;
};
