import * as http from 'http';
import * as fs from 'fs';

const port = 8080;

const server = http.createServer((req, res) => {
  try {
    if (req.method === 'GET'){
      if (req.url === '/'){
        (() => {
          /* assemble html */
          (() => {
            const head = fs.readFileSync('./raw_data/head.txt', 'utf8');
            const header = fs.readFileSync('./raw_data/header.txt', 'utf8');
            const main = fs.readFileSync('./raw_data/main.txt', 'utf8');
            const footer = fs.readFileSync('./raw_data/footer.txt', 'utf8');

            const html = `${head}\n${header}\n${main}\n${footer}\n`

            fs.writeFileSync('./contents/html.txt', html, 'utf8');
          })();

          /* response html */
          (() => {
            const html = fs.readFileSync('./contents/html.txt', 'utf8');
            console.log(html);
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(html);
          })();
        })();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(req.url);
      }
    }
  } catch (err) {
    
  }
})

server.listen(port, () => { // 서버 연결
  console.log(`http://localhost:${8080}/`);
});
