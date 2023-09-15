import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.middleware.ts";
import PostSchema from "../schemas/posts.schemas.ts";
import PostController from "../controllers/posts.controller.ts";

const postsRouter = Router();

postsRouter.get("/posts", PostController.getAll);
postsRouter.post("/new-post", validateSchema(PostSchema), PostController.create);
postsRouter.patch("/like-post/:id", PostController.like);
postsRouter.delete("/post/:id", PostController.remove);
postsRouter.put("/update-post/:id", validateSchema(PostSchema), PostController.edit);

export default postsRouter;