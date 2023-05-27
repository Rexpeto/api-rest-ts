import { Router } from "express";
import { loginCtrl, registerCrtl } from "../controllers/auth";

const router = Router();

/**
 * https://[IpV4]:[PORT]/auth/login
 * https://[IpV4]:[PORT]/auth/register
 * */
router.post("/login", loginCtrl);
router.post("/register", registerCrtl);

export { router }
