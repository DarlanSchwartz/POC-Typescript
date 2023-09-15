import { Post } from "../protocols/post.types";
declare function create(post: Post): Promise<void>;
declare function getAll(limit: number, name: string): Promise<Array<Post>>;
declare function like(postId: number): Promise<void>;
declare function edit(newPost: Post, postId: number): Promise<void>;
declare function remove(postId: number): Promise<void>;
declare function postIdExists(postId: number): Promise<boolean>;
declare const PostRepository: {
    create: typeof create;
    getAll: typeof getAll;
    like: typeof like;
    edit: typeof edit;
    remove: typeof remove;
    postIdExists: typeof postIdExists;
};
export default PostRepository;
