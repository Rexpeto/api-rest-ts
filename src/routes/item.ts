import { Router } from "express";
import {
    deleteItem,
    getItem,
    getItems,
    setItem,
    updateItem,
} from "../controllers/item";

const router = Router();

/**
 * https://[Ipv4]:[PORT]/items [GET]
 */

router.route("/").get(getItems).post(setItem);
router.route("/:id").get(getItem).put(updateItem).delete(deleteItem);

export { router };
