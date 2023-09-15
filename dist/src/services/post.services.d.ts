import { Post } from "../protocols/post.types";
declare function getAll(limit: number, name: string): Promise<Array<Post>>;
declare function create(post: Post): Promise<void>;
declare function like(postId: number): Promise<void>;
declare function update(postId: number, newPost: Post): Promise<void>;
declare function remove(postId: number): Promise<void>;
declare const PostService: {
    getAll: typeof getAll;
    create: typeof create;
    like: typeof like;
    remove: typeof remove;
    update: typeof update;
};
export default PostService;
