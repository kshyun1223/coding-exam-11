module.exports = (input, output) => {
    const fs = require('fs');
    fs.readdir(input, (err, file) => {
        if (err)
            throw err;
        const logJson = JSON.stringify(file, null, 2);
        fs.writeFileSync(output, logJson);
    });
};
