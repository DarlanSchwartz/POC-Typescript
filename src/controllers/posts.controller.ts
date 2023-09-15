import { Request, Response } from "express";
import PostService from "../services/post.services.ts";
import { Post } from "protocols/post.types.ts";

async function getAll(req: Request, res: Response) {
  const posts = await PostService.getAll();
  return res.send(posts);
}

async function create(req: Request, res: Response) {
  const post = req.body as Post;
  await PostService.create(post);
  return res.sendStatus(201);
}

async function like(req: Request, res: Response) {
  const id = Number(req.params.id);
  await PostService.like(id);
  return res.sendStatus(201);
}

async function edit(req: Request, res: Response) {
  const id = Number(req.params.id);
  const newPost : Post = req.body;
  await PostService.update(id,newPost);
  return res.sendStatus(204);
}

async function remove(req: Request, res: Response) {
  const id = Number(req.params.id);
  await PostService.remove(id);
  return res.sendStatus(204);
}

const PostController = { getAll, create, like, edit, remove };

export default PostController;