import * as http from 'http';
import { main } from './main';
import { post } from './post';

const port = 5580;

const server = http.createServer((req: any, res: any) => {
  try {
    if (req.method === 'GET'){
      /* 시작페이지 */
      if (req.url === '/'){
        main(req, res)

      /* 라우팅 */
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(req.url);
      }

    } else if (req.method === 'POST'){
      /* 포스트 입력 */
      if (req.url === '/post'){ 
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
