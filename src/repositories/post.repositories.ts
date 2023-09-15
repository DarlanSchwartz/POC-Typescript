import { Post } from "protocols/post.types";

async function create(post: Post): Promise<void> {

}

async function getAll(): Promise<Array<Post>> {
    return null;
}

async function like(postId: number): Promise<void> {

}

async function edit(postId: number): Promise<void> {

}

async function remove(req: Request, res: Response): Promise<void> {
   
}

const PostRepository = { create, getAll, like, edit, remove };

export default PostRepository;
