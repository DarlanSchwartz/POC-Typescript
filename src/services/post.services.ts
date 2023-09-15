import ErrorType from "protocols/error.types";
import { Post } from "../protocols/post.types";
import PostRepository from "repositories/post.repositories";

async function getAll(): Promise<Array<Post>> {
  const posts = await PostRepository.getAll();
  return posts;
}

async function create(post: Post): Promise<void> {
  await PostRepository.create(post);
}

async function like(postId: number): Promise<void> {
  if(!postId) throw {type : ErrorType.BAD_REQUEST, message:`you need to pass an id to like a post - id passed ${postId}` };
  await PostRepository.like(postId);
}

async function update(postId: number, newPost : Post): Promise<void> {
  if(!postId) throw {type : ErrorType.BAD_REQUEST, message:`you need to pass an id to edit a post - id passed ${postId}` };
  await PostRepository.edit(newPost,postId);
}

async function remove(postId: number): Promise<void> {
  if(!postId) throw {type : ErrorType.BAD_REQUEST, message:`you need to pass an id to remove a post - id passed ${postId}` };
  await PostRepository.remove(postId);
}


const PostService = { getAll, create, like, remove, update };

export default PostService;

