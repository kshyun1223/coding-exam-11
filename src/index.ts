import http = require('http');
import fs = require('fs');
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
      const body=[]; 

      // on 은 특정 event를 listen 할 수 있게 해준다. 여기서는 data event가 발생할 때마다 특정 펑션 수행
      req.on('data', (chunk: string) => { // chunk가 뭐지?
        body.push(chunk); //body에 chunk 데이터를 넣는다. 
        console.log(body.toString())
      });

      /* req.on('end' , ()=>{// on에서 읽어와서 body에 저장한 chunk 데이터를 string으로 바꿔서 파싱해준다.
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody)
        // const message = parsedBody.split('=')[1]; // = 을기준으로 split해서 message에 넣어준다. 
        fs.writeFileSync("./raw_data/main.txt", parsedBody);
      }); */

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
