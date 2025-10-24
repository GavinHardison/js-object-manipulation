const sculptureList = require('./data.js')

let sculptureListLengths = []

sculptureList.forEach((sculpture) => {
    let sculptureListLengthEntry = {}
    sculptureListLengthEntry['name'] = sculpture.description.length
    sculptureListLengthEntry['artist'] = sculpture.artist.length
    sculptureListLengthEntry['description'] = sculpture.url.length
    sculptureListLengthEntry['url'] = sculpture.alt.length
    sculptureListLengthEntry['alt'] = sculpture.name.length
    sculptureListLengths.push(sculptureListLengthEntry)
})

console.log(sculptureListLengths)