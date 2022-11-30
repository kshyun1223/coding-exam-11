module.exports = (list: any, input: any, output: any) => {
  const fs = require('fs')
  const jsonFile = fs.readFileSync(list, 'utf8')
  const jsonData = JSON.parse(jsonFile)

  const fileArray = []
  for (let key in jsonData){
    const value = jsonData[key].replace('.txt', '')
    fileArray.push(value)
  }
  
  const eachContents:any = {}
  fileArray.forEach((key) => eachContents[key] = fs.readFileSync(input+`${key}`+'.txt', 'utf8'))
  console.log(eachContents)

  const html = `${eachContents.head}\n${eachContents.header}\n${eachContents.main}\n${eachContents.footer}\n`
  fs.writeFileSync(output, html, 'utf8');
}