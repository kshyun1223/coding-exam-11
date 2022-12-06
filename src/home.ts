// import * as fs from 'fs';

// export const home = (_req:any, res:any):void => {
//   (() => {
//     /* logJSON */
//     (()=> {
//       fs.readdir("./raw_data", (err, file) => {
//         if (err) throw err;
//         const logJson = JSON.stringify(file, null, 2);
//         fs.writeFileSync("./contents/log.json", logJson);
//       })
//     })();

//     /* make html */
//     (() => {
//       const jsonFile = fs.readFileSync('./contents/log.json', 'utf8')
//       const jsonData = JSON.parse(jsonFile)

//       const fileArray = []
//       for (let key in jsonData){
//         const value = jsonData[key].split('.')
//         fileArray.push(value[0])
//       }
//       // console.log(fileArray) //['footer', 'head', 'header', 'main']

//       const eachContents:any = {}
//       fileArray.forEach((key) => eachContents[key] = fs.readFileSync(`./raw_data/${key}`+".txt", 'utf8'))
//       // console.log("이게모얌?", eachContents)
//       // console.log("이건모얌?", JSON.parse(eachContents.main))

//       const html = `${eachContents.head}\n${eachContents.header}\n${eachContents.main}\n${eachContents.footer}\n`
//       fs.writeFileSync('./contents/html.txt', html, 'utf8');
//     })();

//     /* response html */
//     (() => {
//       const html = fs.readFileSync('./contents/html.txt', 'utf8');
//       // console.log(html);
//       res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//       res.end(html);
//     })();
//   })();
// }
