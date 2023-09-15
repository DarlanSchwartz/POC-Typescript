import db from "database/database.connection.ts";
import { Post } from "protocols/post.types";

async function create(post: Post): Promise<void> {
    const { writerId, name, likeCount, content, createdAt } = post;
    const query = `INSERT INTO posts ( name, writerid, likecount, content, createdat) VALUES( $1, $2, $3, $4, $5);`;
    await db.query(query, [name, writerId, likeCount, content, createdAt]);
}

async function getAll(): Promise<Array<Post>> {
    const query = `SELECT * FROM posts;`;
    const dbPosts = await db.query(query, []);
    const posts: Array<Post> = dbPosts.rows;
    return posts;
}

async function like(postId: number): Promise<void> {
    const query = `UPDATE posts SET likecount = likecount + 1 WHERE id = $1;`;
    await db.query(query, [postId]);
}

async function edit(newPost: Post, postId: number): Promise<void> {
    const { writerId, name, likeCount, content, createdAt } = newPost;
    const query = `
            UPDATE posts
                SET
                name = $1,
                writerid = $2,
                likecount = $3,
                content = $4',
                createdat = $5'
            WHERE id = $6;
        `;
    await db.query(query, [name, writerId, likeCount, content, createdAt, postId]);
}

async function remove(postId : number): Promise<void> {
    const query = `DELETE * FROM posts WHERE id = $1`;
    await db.query(query, [postId]);
}

const PostRepository = { create, getAll, like, edit, remove };

export default PostRepository;
