import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt } from "../utils/bcrypt.handle";

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
