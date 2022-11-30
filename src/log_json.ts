module.exports = (input:string, output:string) => {
  const fs = require('fs')
  fs.readdir(input, (err: any, file: any) => {
    if (err) throw err;
    const logJson = JSON.stringify(file, null, 2);
    fs.writeFileSync(output, logJson);
  })
}