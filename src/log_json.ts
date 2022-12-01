import * as fs from 'fs'

export function logJSON (input:string, output:string) {
  fs.readdir(input, (err: any, file: any) => {
    if (err) throw err;
    const logJson = JSON.stringify(file, null, 2);
    fs.writeFileSync(output, logJson);
  })
}