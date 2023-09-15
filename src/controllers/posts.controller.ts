import { Request, Response } from "express";
import PostService from "../services/post.services.ts";

function getAll(req: Request, res: Response) {
  const musics = PostService.getAll();
  res.send(musics);
}

function create(req: Request, res: Response) {
  const music = req.body;
  PostService.create(music);
  res.sendStatus(201);
}

function like(req: Request, res: Response) {
  const music = req.body;
  PostService.like(music);
  res.sendStatus(201);
}

function edit(req: Request, res: Response) {
  const music = req.body;
  PostService.update(music);
  res.sendStatus(201);
}

function remove(req: Request, res: Response) {
  const music = req.body;
  PostService.remove(music);
  res.sendStatus(201);
}

const PostController = { getAll, create, like, edit, remove };

export default PostController;