"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const fs = require("fs");
const log_json_1 = require("./log_json");
const make_html_1 = require("./make_html");
const port = 8080;
const server = http.createServer((req, res) => {
    try {
        if (req.method === 'GET') {
            if (req.url === '/') {
                (() => {
                    /* logJSON */
                    (0, log_json_1.logJSON)('./raw_data', "./contents/log.json");
                    /* make html */
                    (0, make_html_1.makeHTML)('./contents/log.json', './raw_data/', './contents/html.txt')(() => {
                        const html = fs.readFileSync('./contents/html.txt', 'utf8');
                        // console.log(html);
                        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                        res.end(html);
                    })();
                })();
            }
            else {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(req.url);
            }
        }
    }
    catch (err) {
        console.log(err);
    }
});
server.listen(port, () => {
    console.log(`http://localhost:${8080}/`);
});
