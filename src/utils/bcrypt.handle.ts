import { hash } from "bcrypt"

export const encrypt = async (password: string) => {
    const passwordHash = await hash(password, 10);
    return passwordHash;
}

export const verified = (password: string) => {}
