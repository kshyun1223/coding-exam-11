import http = require('http');
import fs = require('fs');
const port = 8080;

const server = http.createServer((req: any, res: any) => {
  try {
    if (req.method === 'GET'){
      if (req.url === '/'){
        (() => {

          /* make fileList */
          (() => {
            fs.readdir("./raw_data", (err, file) => {
              if (err) throw err;
              const logJson = JSON.stringify(file, null, 2);
              fs.writeFileSync("./contents/log.json", logJson);
            })
          
            const jsonFile = fs.readFileSync('./contents/log.json', 'utf8')
            const jsonData = JSON.parse(jsonFile)
            // console.log(jsonData) // [ 'footer.txt', 'head.txt', 'header.txt', 'main.txt' ]
            // console.log(typeof(jsonData))// object

            const fileArray = []

            for (let key in jsonData){
              const value = jsonData[key]
              console.log(value)
              fileArray.push(value)
            }

            console.log(fileArray)
            console.log(Array.isArray(fileArray)) // true

            
          })();

          // const eachContents = {}
            
            // fileList.head = fs.readFileSync('./raw_data/head.txt', 'utf8');
            // fileList.header = fs.readFileSync('./raw_data/header.txt', 'utf8');
            // fileList.main = fs.readFileSync('./raw_data/main.txt', 'utf8');
            // fileList.footer = fs.readFileSync('./raw_data/footer.txt', 'utf8');

            // const html = `${head}\n${header}\n${main}\n${footer}\n`

            // fs.writeFileSync('./contents/html.txt', html, 'utf8');
          

          /* response html */
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
    
  }
})
server.listen(port, () => { // 서버 연결
  console.log(`http://localhost:${8080}/`);
});
