(() => {
  const jsonFile = fs.readFileSync('./contents/log.json', 'utf8')
  const jsonData = JSON.parse(jsonFile)

  const fileArray = []
  for (let key in jsonData){
    const value = jsonData[key].replace('.txt', '')
    fileArray.push(value)
  }

  const eachContents:any = {}
  fileArray.forEach((key) => eachContents[key] = fs.readFileSync('./raw_data/'+`${key}`+'.txt', 'utf8'))
  // console.log(eachContents)

  const html = `${eachContents.head}\n${eachContents.header}\n${eachContents.main}\n${eachContents.footer}\n`
  fs.writeFileSync('./contents/html.txt', html, 'utf8');
})();