import * as querystring from 'querystring';
import * as fs from 'fs';

export const post = (req:any, res:any):void => {
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
    console.log(main)

    fs.writeFileSync("./contents/main.json", `${JSON.stringify(main)}`);
    fs.writeFileSync("./raw_data/main.txt", `${JSON.stringify(main)}`);
  });

  res.writeHead(302, {Location: '/'}); // 리다이렉트 하려면 302 코드 필요한듯...?
  res.end();
}