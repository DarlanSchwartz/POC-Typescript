"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var validateSchema_middleware_1 = __importDefault(require("../middlewares/validateSchema.middleware"));
var posts_schemas_1 = __importDefault(require("../schemas/posts.schemas"));
var posts_controller_1 = __importDefault(require("../controllers/posts.controller"));
var postsRouter = (0, express_1.Router)();
postsRouter.get("/posts", posts_controller_1.default.getAll);
postsRouter.post("/new-post", (0, validateSchema_middleware_1.default)(posts_schemas_1.default), posts_controller_1.default.create);
postsRouter.patch("/like-post/:id", posts_controller_1.default.like);
postsRouter.delete("/remove-post/:id", posts_controller_1.default.remove);
postsRouter.put("/update-post/:id", (0, validateSchema_middleware_1.default)(posts_schemas_1.default), posts_controller_1.default.edit);
exports.default = postsRouter;
