"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const main_1 = require("./main");
const post_1 = require("./post");
const port = 5580;
const server = http.createServer((req, res) => {
    try {
        if (req.method === 'GET') {
            /* 시작페이지 */
            if (req.url === '/') {
                (0, main_1.main)(req, res);
                /* 라우팅 */
            }
            else {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(req.url);
            }
        }
        else if (req.method === 'POST') {
            /* 포스트 입력 */
            if (req.url === '/post') {
                (0, post_1.post)(req, res);
            }
        }
    }
    catch (err) {
        console.log(err);
    }
});
server.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
