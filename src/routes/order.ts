import { Router } from "express";
import { getOrders } from "../controllers/order";
import { checkJWT } from "../middleware/session";

const router = Router();
/*
 * Route private with JWT
 * */

router.get('/', checkJWT, getOrders);

export { router };
