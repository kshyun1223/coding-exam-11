"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const fs = require("fs");
const port = 8080;
const server = http.createServer((req, res) => {
    try {
        if (req.method === 'GET') {
            if (req.url === '/') {
                (() => {
                    /* logJSON */
                    const logJSON = require('./log_json');
                    logJSON('./raw_data', "./contents/log.json");
                    /* make html */
                    const makeHTML = require('./make_html');
                    makeHTML('./contents/log.json', './raw_data/', './contents/html.txt')(() => {
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
