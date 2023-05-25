import { Router } from "express";
import {
    deleteBlog,
    getBlog,
    getBlogs,
    setBlog,
    updateBlog,
} from "../controllers/blog";

const router = Router();

router.route("/").get(getBlogs).post(setBlog);
router.route("/:id").get(getBlog).put(updateBlog).delete(deleteBlog);

export { router };
