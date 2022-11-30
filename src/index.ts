import http = require('http');
import fs = require('fs');
const port = 8080;

const server = http.createServer((req: any, res: any) => {
  try {
    if (req.method === 'GET'){
      if (req.url === '/'){
        (() => {
          // * logJSON
          
          // * make html

          // * response html
          (() => {
            const html = fs.readFileSync('./contents/html.txt', 'utf8');
            // console.log(html);
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
    console.log(err)
  }
})
server.listen(port, () => { // 서버 연결
  console.log(`http://localhost:${8080}/`);
});
