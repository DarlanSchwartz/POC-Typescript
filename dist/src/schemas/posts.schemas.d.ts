import JoiBase from "joi";
import { Post } from "protocols/post.types";
declare const PostSchema: JoiBase.ObjectSchema<Post>;
export default PostSchema;
