import * as http from 'http';
import * as fs from 'fs';

const port = 8080;

http.createServer((req, res) => {
  try {
    if (req.method === 'GET'){
      if (req.url === '/'){
        (() => {
          /* assemble body */
          (() => {
            const header = fs.readFileSync('contents/header.txt', 'utf8');
            const main = fs.readFileSync('contents/main.txt', 'utf8');
            const footer = fs.readFileSync('contents/footer.txt', 'utf8');
            fs.writeFileSync('contents/body.txt', `${header}\n${main}\n${footer}`, 'utf8');
          })();

          /* assemble html */
          (() => {
            const head = fs.readFileSync('contents/head.txt', 'utf8');
            const body = fs.readFileSync('contents/body.txt', 'utf8');
            fs.writeFileSync('contents/html.txt', `${head}\n${body}`, 'utf8');
          })();

          /* response html */
          (() => {
            const html = fs.readFileSync('contents/html.txt', 'utf8');
            console.log(html);
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(html);
          })();
        })();
      } else if (req.url === '/a'){
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(req.url);
      } else if (req.url === '/b'){
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(req.url);
      } else if (req.url === '/c'){
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(req.url);
      } else if (req.url === '/d'){
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(req.url);
      }
    }
  } catch (err) {
    
  }
})
.listen(port, () => { // 서버 연결
  console.log(`http://localhost:${8080}/`);
});

