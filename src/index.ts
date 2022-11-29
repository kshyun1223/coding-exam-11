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
            const data = []
            fs.readdir("./raw-data", (err, fileNameElement) => {
              if (err) throw err
              console.log(fileNameElement)
              data.push(fileNameElement)
            })
            console.log(data)
            // fileNameElement.map((fileName) => {
            //   console.log(fileName)
            // })
          })();

          /* assemble html */
          (() => {
            const head = fs.readFileSync('./raw-data/head.txt', 'utf8');
            const header = fs.readFileSync('./raw-data/header.txt', 'utf8');
            const main = fs.readFileSync('./raw-data/main.txt', 'utf8');
            const footer = fs.readFileSync('./raw-data/footer.txt', 'utf8');
            fs.writeFileSync('./contents/html.txt', `${head}\n${header}\n${main}\n${footer}`, 'utf8');
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
