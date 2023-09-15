"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_types_1 = require("../protocols/error.types");
function validateSchema(schema) {
    return function (req, res, next) {
        var validation = schema.validate(req.body, { abortEarly: false });
        if (validation.error) {
            var errors = validation.error.details.map(function (detail) { return detail.message; });
            throw new error_types_1.CustomError(error_types_1.ErrorType.UNPROCESSABLE, errors.join(', '));
        }
        next();
    };
}
exports.default = validateSchema;
