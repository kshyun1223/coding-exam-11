"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const fs = require("fs");
http.createServer((req, res) => {
    /* head */
    const head = fs.readFileSync('contents/head.txt', 'utf8');
    /* body */
    const header = fs.readFileSync('contents/header.txt', 'utf8');
    const main = fs.readFileSync('contents/main.txt', 'utf8');
    const footer = fs.readFileSync('contents/footer.txt', 'utf8');
    fs.writeFileSync('contents/body.txt', `${header}\n${main}\n${footer}`, 'utf8');
    const body = fs.readFileSync('contents/body.txt', 'utf8');
    fs.writeFileSync('contents/html.txt', `${head}\n${body}`, 'utf8');
    const html = fs.readFileSync('contents/html.txt', 'utf8');
    console.log(html);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
})
    .listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중입니다!');
});
