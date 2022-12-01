import * as http from 'http';
import * as fs from 'fs';
import * as querystring from 'querystring'

const port = 8080;

const server = http.createServer((req: any, res: any) => {
  try {
    if (req.method === 'GET'){
      if (req.url === '/'){
        (() => {
          /* logJSON */
          (()=> {
            fs.readdir("./raw_data", (err, file) => {
              if (err) throw err;
              const logJson = JSON.stringify(file, null, 2);
              fs.writeFileSync("./contents/log.json", logJson);
            })
          })();

          /* make html */
          (() => {
            const jsonFile = fs.readFileSync('./contents/log.json', 'utf8')
            const jsonData = JSON.parse(jsonFile)

            const fileArray = []
            for (let key in jsonData){
              const value = jsonData[key].replace('.txt', '')
              fileArray.push(value)
            }

            const eachContents:any = {}
            fileArray.forEach((key) => eachContents[key] = fs.readFileSync('./raw_data/'+`${key}`+'.txt', 'utf8'))
            // console.log(eachContents)

            const html = `${eachContents.head}\n${eachContents.header}\n${eachContents.main}\n${eachContents.footer}\n`
            fs.writeFileSync('./contents/html.txt', html, 'utf8');
          })();

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
    } else if (req.method === 'POST'){
      let body =''
      req.on('data', (data: string) => {
        body+=data
        const parsed = querystring.parse(body)
        // console.log(parsed.content)
        const component = `<p>${parsed}<p>`
        fs.writeFileSync("./raw_data/main.txt", component);
      });

      res.writeHead(302, {Location: '/'}); // 리다이렉트 하려면 302 코드 필요한듯...?
      res.end();
    }
  } catch (err) {
    console.log(err)
  }
})
server.listen(port, () => { // 서버 연결
  console.log(`http://localhost:${8080}/`);
});
