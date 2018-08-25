const fs = require('fs')
const path = require('path')
    //By using csv to json node module
    // const csvToJson = require('csvtojson')
    // csvToJson()
    //     .fromFile('customer-data.csv')
    //     .then((jsonObj) => {
    //         console.log(JSON.stringify(jsonObj))
    //     })

//By using core node modules
fs.readFile('customer-data.csv', 'utf8', (error, data) => {
    if (error)
        return console.log(error)
    let json = []
        //converting each row of csv to an array
    let dataArray = data.trim().split(/\r?\n/)
        //seperating the header content of csv
    let headers = dataArray.shift().split(',')
    dataArray.forEach(row => {
        let obj = {}
        let rowArray = row.split(',')
        for (let i = 0; i < headers.length; i++) {
            //object to hold a row csv data in key-value pairs
            obj[headers[i]] = rowArray[i]
        }
        json.push(obj)
    })

    fs.writeFile(path.join(__dirname, 'customer-data.json'), JSON.stringify(json, null, 4), 'utf8', (error) => {
        if (error)
            return console.error('erro while writing', error)
        console.log('conversion of csv to json is completed')
    })
})
console.log('reading file started')