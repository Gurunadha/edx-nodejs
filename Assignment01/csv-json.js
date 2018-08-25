const fs = require('fs')
const path = require('path')
    // const csvToJson = require('csvtojson')
    // csvToJson()
    //     .fromFile('customer-data.csv')
    //     .then((jsonObj) => {
    //         console.log(jsonObj)
    //     })
fs.readFile('customer-data.csv', 'utf8', (error, data) => {
    if (error)
        return console.log(error)
    let json = []
    let dataArray = data.split('\n')
        //console.log(dataArray)
    let headers = dataArray.shift().replace(/\r/g, '').split(',')
    console.log(headers)
        //console.log(dataArray)
    dataArray.forEach(row => {
        let obj = {}
        row = row.replace(/\r/g, '')
        let rowArray = row.split(',')
            //console.log(rowArray)
        for (let i = 0; i < headers.length; i++) {
            obj[headers[i]] = rowArray[i]
        }
        json.push(obj)
    })

    fs.writeFile(path.join(__dirname, 'customer-data.json'), JSON.stringify(json), 'utf8', (error) => {
        if (error)
            return console.error('erro while writing', error)
                //fs.close()
    })
})
console.log('reading file started')