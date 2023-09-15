"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var date_1 = __importDefault(require("@joi/date"));
var Joi = joi_1.default.extend(date_1.default);
var PostSchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    writerId: Joi.number().required(),
    likeCount: Joi.number().required(),
    content: Joi.string().min(3).max(600).required(),
    createdAt: Joi.date().format('DD-MM-YYYY').less('now').required()
});
exports.default = PostSchema;
