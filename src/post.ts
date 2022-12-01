import * as querystring from 'querystring';

export const post = (req:any, res:any):void => {
  let body =''
  req.on('data', (data: string) => {
    const today = new Date()
    body+=(today+data)
    const parsed = querystring.parse(body)
    console.log(parsed)
    // fs.writeFileSync("./contents/main.json", `"${today + '<br>' + component}"`);
    /* fs.writeFileSync("./raw_data/main.txt", `${today + '<br>' + component}`); */
  });

  res.writeHead(302, {Location: '/'}); // 리다이렉트 하려면 302 코드 필요한듯...?
  res.end();
}