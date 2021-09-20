const fs = require('fs')

fs.readFile('./conf.js', (err, data) => {
    if (err) throw err;
    console.log(data.toString())
})