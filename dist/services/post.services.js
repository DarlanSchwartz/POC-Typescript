"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var error_types_1 = require("../protocols/error.types");
var post_repositories_1 = __importDefault(require("../repositories/post.repositories"));
var date_services_1 = __importDefault(require("./date.services"));
function getAll(limit, name) {
    return __awaiter(this, void 0, void 0, function () {
        var posts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, post_repositories_1.default.getAll(limit, name)];
                case 1:
                    posts = _a.sent();
                    return [2 /*return*/, posts];
            }
        });
    });
}
function create(post) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    post.createdAt = (0, date_services_1.default)(post.createdAt.toString());
                    return [4 /*yield*/, post_repositories_1.default.create(post)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function like(postId) {
    return __awaiter(this, void 0, void 0, function () {
        var isValidPost, message;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, post_repositories_1.default.postIdExists(postId)];
                case 1:
                    isValidPost = _a.sent();
                    if (!isValidPost) {
                        message = "Post id ".concat(postId, " does not exists!");
                        throw new error_types_1.CustomError(error_types_1.ErrorType.NOT_FOUND, message);
                    }
                    if (!postId)
                        throw new error_types_1.CustomError(error_types_1.ErrorType.BAD_REQUEST, "you need to pass an id to like a post - id passed ".concat(postId));
                    return [4 /*yield*/, post_repositories_1.default.like(postId)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function update(postId, newPost) {
    return __awaiter(this, void 0, void 0, function () {
        var isValidPost, message;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, post_repositories_1.default.postIdExists(postId)];
                case 1:
                    isValidPost = _a.sent();
                    if (!isValidPost) {
                        message = "Post id ".concat(postId, " does not exists!");
                        throw new error_types_1.CustomError(error_types_1.ErrorType.NOT_FOUND, message);
                    }
                    if (!postId)
                        throw new error_types_1.CustomError(error_types_1.ErrorType.BAD_REQUEST, "you need to pass an id to edit a post - id passed ".concat(postId));
                    newPost.createdAt = (0, date_services_1.default)(newPost.createdAt.toString());
                    return [4 /*yield*/, post_repositories_1.default.edit(newPost, postId)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function remove(postId) {
    return __awaiter(this, void 0, void 0, function () {
        var isValidPost, message;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, post_repositories_1.default.postIdExists(postId)];
                case 1:
                    isValidPost = _a.sent();
                    if (!isValidPost) {
                        message = "Post id ".concat(postId, " does not exists!");
                        throw new error_types_1.CustomError(error_types_1.ErrorType.NOT_FOUND, message);
                    }
                    if (!postId) {
                        throw new error_types_1.CustomError(error_types_1.ErrorType.BAD_REQUEST, "you need to pass an id to remove a post - id passed ".concat(postId));
                    }
                    return [4 /*yield*/, post_repositories_1.default.remove(postId)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
var PostService = { getAll: getAll, create: create, like: like, remove: remove, update: update };
exports.default = PostService;
