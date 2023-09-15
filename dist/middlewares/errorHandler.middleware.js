"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_1 = __importDefault(require("http-status"));
var error_types_1 = require("../protocols/error.types");
function errorHandler(error, req, res, next) {
    console.log(error);
    switch (error.type) {
        case error_types_1.ErrorType.CONFLICT:
            return res.status(http_status_1.default.CONFLICT).send("Conflict: " + error.message);
        case error_types_1.ErrorType.NOT_FOUND:
            return res.status(http_status_1.default.NOT_FOUND).send("Not found: " + error.message);
        case error_types_1.ErrorType.UNPROCESSABLE:
            return res.status(http_status_1.default.UNPROCESSABLE_ENTITY).send("Unprocessable entity: " + error.message);
        case error_types_1.ErrorType.BAD_REQUEST:
            return res.status(http_status_1.default.BAD_REQUEST).send("Bad Request: " + error.message);
        case error_types_1.ErrorType.INTERNAL:
            return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong 😢");
        default:
            return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong 😢");
    }
}
exports.default = errorHandler;
