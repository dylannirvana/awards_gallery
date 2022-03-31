const fs = require('fs')
const source = require('./source.json')

// If the source file contains multiple sets, choose the index [x]
const data = source.image_sets[0].image_with_text.map((item) => ({
    title: item.text,
    src: item.image.url,
    width: item.image.width,
    height: item.image.height
}))

const mystring = JSON.stringify(data, null, 4)
console.log(mystring)

// Write to whatever file indicated by index
fs.writeFileSync('../src/photos_planetids.js', `export const photos = ${mystring};`, 'utf-8')

