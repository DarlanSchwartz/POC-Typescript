"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createDateFromDDMMYYYY(dateString) {
    var parts = dateString.split('-');
    if (parts.length === 3) {
        var day = parseInt(parts[0], 10);
        var month = parseInt(parts[1], 10) - 1;
        var year = parseInt(parts[2], 10);
        if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
            return new Date(year, month, day);
        }
    }
    return null;
}
exports.default = createDateFromDDMMYYYY;
