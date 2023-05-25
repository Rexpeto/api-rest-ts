import { Router, Request, Response } from "express";

const router = Router();

/**
 * https://[Ipv4]:[PORT]/items [GET]
 */

router.get("/", (req: Request, res: Response) => {
    res.send("Hola");
});

export { router };
