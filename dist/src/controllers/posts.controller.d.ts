import { Request, Response } from "express";
declare function getAll(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare function create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare function like(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare function edit(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare function remove(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare const PostController: {
    getAll: typeof getAll;
    create: typeof create;
    like: typeof like;
    edit: typeof edit;
    remove: typeof remove;
};
export default PostController;
