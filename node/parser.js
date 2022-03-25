const fs = require('fs')
const source = require('./source.json')

const data = source.image_sets[0].image_with_text.map((item) => ({
    title: item.text,
    src: item.image.url,
    width: item.image.width,
    height: item.image.height
}))

const mystring = JSON.stringify(data, null, 4)
console.log(mystring)

fs.writeFileSync('./photos.js', `export const photos = ${mystring};`, 'utf-8')

