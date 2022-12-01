"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logJSON = void 0;
const fs = require("fs");
function logJSON(input, output) {
    fs.readdir(input, (err, file) => {
        if (err)
            throw err;
        const logJson = JSON.stringify(file, null, 2);
        fs.writeFileSync(output, logJson);
    });
}
exports.logJSON = logJSON;
