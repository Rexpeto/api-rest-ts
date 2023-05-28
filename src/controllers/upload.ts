import { Response } from "express";
import { RequestExt } from "../interfaces/req-ext";
import { handleHttp } from "../utils/error.handle";
import { Storage } from "../interfaces/storage";
import { registerUpload } from "../services/storage";

export const getFile = async (req: RequestExt, res: Response) => {
    try {
        const { file } = req;
        const user: any = req.user;

        const dataToRegister: Storage = {
            fileName: `${file?.filename}`,
            idUser: `${user?.email}`,
            path: `${file?.path}`,
        };

        const response = await registerUpload(dataToRegister);

        res.status(200).json(response);
    } catch (e) {
        handleHttp(res, "Error_GET_BLOG");
    }
};
