(()=> {
  fs.readdir("./raw_data", (err, file) => {
    if (err) throw err;
    const logJson = JSON.stringify(file, null, 2);
    fs.writeFileSync("./contents/log.json", logJson);
  })
})();