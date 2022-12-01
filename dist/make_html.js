"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeHTML = void 0;
const fs = require("fs");
function makeHTML(list, input, output) {
    const jsonFile = fs.readFileSync(list, 'utf8');
    const jsonData = JSON.parse(jsonFile);
    const fileArray = [];
    for (let key in jsonData) {
        const value = jsonData[key].replace('.txt', '');
        fileArray.push(value);
    }
    const eachContents = {};
    fileArray.forEach((key) => eachContents[key] = fs.readFileSync(input + `${key}` + '.txt', 'utf8'));
    console.log(eachContents);
    const fileOut = `${eachContents.head}\n${eachContents.header}\n${eachContents.main}\n${eachContents.footer}\n`;
    fs.writeFileSync(output, fileOut, 'utf8');
}
exports.makeHTML = makeHTML;
