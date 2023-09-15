import Joi, {Schema} from "joi";
import { Post } from "protocols/post.types";

const PostSchema  = Joi.object<Post>({
  name: Joi.string().required(),
  writerId: Joi.number().required(),
  likeCount: Joi.number().required(),
  content: Joi.string().required(),
  createdAt: Joi.date().required()
});

export default PostSchema;