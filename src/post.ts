// import * as fs from 'fs';

// export const post = (req:any, res:any):void => {
//   let body =''
//   req.on('data', (data: string) => {
//     body+=data
//     const parsed = querystring.parse(body)
    
//     interface MainType {
//       date: Date;
//       title: string | string[] ;
//       content: string | string[];
//     }
//     class Main implements MainType {
//       constructor (
//         public date: Date,
//         public title: string | string[],
//         public content: string | string[],
//       ) { }
//     }
//     const main = new Main(new Date(), parsed.title, parsed.content);
    
//     const mainAssemble = `
//       <p>날짜: ${main.date.toLocaleString()}</p>
//       <p>제목: ${main.title}</p>
//       <p>내용: ${main.content}</p>
//     `
//     console.log(mainAssemble)

//     fs.writeFileSync("./raw_data/main.txt", mainAssemble);
//   });

//   res.writeHead(302, {Location: '/'}); // 리다이렉트 하려면 302 코드 필요한듯...?
//   res.end();
// }