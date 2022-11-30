module.exports = (pathString:string) => {
  const fs = require('fs')
  fs.readdir(pathString, (err: any, file: any) => {
    if (err) throw err;
    const logJson = JSON.stringify(file, null, 2);
    fs.writeFileSync("./contents/log.json", logJson);
  })
}