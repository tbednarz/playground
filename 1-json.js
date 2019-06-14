const fs = require('fs')
// const book = {
//     title: 'House of Scorpions',
//     author: 'Cant remember'
// }

// const bookJson =JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJson)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJson = dataBuffer.toString()
// const data = JSON.parse(dataJson)
// console.log(data.title)



const dataBuffer = fs.readFileSync('1-json.json')
const datajson = dataBuffer.toString();
const data = JSON.parse(datajson)

data.name = 'Tres'
data.age = 52

const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', userJSON)


