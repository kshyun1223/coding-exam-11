import * as http from 'http';
import * as fs from 'fs';
import * as querystring from 'querystring';


// import { home } from './home';
// import { post } from './post';

const port = 5580;

const server = http.createServer((req: any, res: any) => {
  try {
    if (req.method === 'GET'){
      /* 시작페이지 */
      if (req.url === '/'){
        const home = (_req:any, res:any):void => {
          (() => {
            /* logJSON */
            (()=> {
              fs.readdir("./raw_data", (err, file) => {
                if (err) throw err;
                const logJson = JSON.stringify(file, null, 2);
                fs.writeFile("./contents/log.json", logJson, (err) => {
                  if (err) throw err;
                })
              })
            })();
        
            /* make html */
            // todo => readFile 어떻게 해야 될까?
            (() => {
              const jsonFile = fs.readFileSync('./contents/log.json', 'utf8')
              const jsonData = JSON.parse(jsonFile)
        
              const fileArray = []
              for (let key in jsonData){
                const value = jsonData[key].split('.')
                fileArray.push(value[0])
              }
              // console.log(fileArray) //['footer', 'head', 'header', 'main']
        
              const eachContents:any = {}
              fileArray.forEach((key) => eachContents[key] = fs.readFileSync(`./raw_data/${key}`+".txt", 'utf8'))
              // console.log("이게모얌?", eachContents)
              // console.log("이건모얌?", JSON.parse(eachContents.main))
        
              const html = `${eachContents.head}\n${eachContents.header}\n${eachContents.main}\n${eachContents.footer}\n`
              fs.writeFile('./contents/html.txt', html, 'utf8', (err) => {
                if (err) throw err;
              })
            })();
        
            /* response html */
            (() => {
              const html = fs.readFileSync('./contents/html.txt', 'utf8');
              // console.log(html);
              res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
              res.end(html);
            })();
          })();
        }
        home(req, res)

      /* 라우팅 */
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(req.url);
      }

    } else if (req.method === 'POST'){
      /* 포스트 입력 */
      if (req.url === '/post'){
        const post = (req:any, res:any):void => {
          let body =''
          req.on('data', (data: string) => {
            body+=data
            const parsed = querystring.parse(body)
            
            interface MainType {
              date: Date;
              title: string | string[] ;
              content: string | string[];
            }
            class Main implements MainType {
              constructor (
                public date: Date,
                public title: string | string[],
                public content: string | string[],
              ) { }
            }
            const main = new Main(new Date(), parsed.title, parsed.content);
            
            const mainAssemble = `
              <p>날짜: ${main.date.toLocaleString()}</p>
              <p>제목: ${main.title}</p>
              <p>내용: ${main.content}</p>
            `
            console.log(mainAssemble)
        
            fs.writeFile("./raw_data/main.txt", mainAssemble, (err) => {
              if (err) throw err;
            });
          });
        
          res.writeHead(302, {Location: '/'}); // 리다이렉트 하려면 302 코드 필요한듯...?
          res.end();
        }
        post(req, res)
      }
    }
  } catch (err) {
    console.log(err)
  }
})
server.listen(port, () => { // 서버 연결
  console.log(`http://localhost:${port}/`);
});
