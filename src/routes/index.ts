import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

/**
 * index.ts
 * item.ts
 * @returns
 */
const cleanFileName = (fileName: string) => {
    const file = fileName.split(".").shift(); //item
    return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);

    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`Se está ejecutando la ruta ${cleanName}`);
            router.use(`/${cleanName}`, moduleRouter.router);
        });
    }
});

export { router };
