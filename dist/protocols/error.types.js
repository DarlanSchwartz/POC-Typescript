"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = exports.ErrorType = void 0;
var CONFLICT = "Conflict";
var NOT_FOUND = "NotFound";
var UNPROCESSABLE = "Unprocessable";
var BAD_REQUEST = "BadRequest";
var INTERNAL = "Internal";
exports.ErrorType = { CONFLICT: CONFLICT, NOT_FOUND: NOT_FOUND, UNPROCESSABLE: UNPROCESSABLE, BAD_REQUEST: BAD_REQUEST, INTERNAL: INTERNAL };
var CustomError = /** @class */ (function (_super) {
    __extends(CustomError, _super);
    function CustomError(type, message) {
        var _this = _super.call(this, message) || this;
        _this.type = type;
        _this.name = _this.constructor.name;
        return _this;
    }
    return CustomError;
}(Error));
exports.CustomError = CustomError;
