const fs = require('fs')
const source = require('./source.json')

// If the source file contains multiple sets, choose the index [x]
const data_0 = source.image_sets[0].image_with_text.map((item) => ({
    title: item.text,
    src: item.image.url,
    width: item.image.width,
    height: item.image.height
}))

const mystring_0 = JSON.stringify(data_0, null, 4)
// console.log(mystring_0)

// Write to whatever file indicated by index
fs.writeFileSync('../src/photos_planets.js', `export const photos = ${mystring_0};`, 'utf-8')

// If the source file contains multiple sets, choose the index [x]
const data_1 = source.image_sets[1].image_with_text.map((item) => ({
    title: item.text,
    src: item.image.url,
    width: item.image.width,
    height: item.image.height
}))

const mystring_1 = JSON.stringify(data_1, null, 4)
console.log(mystring_1)

// Write to whatever file indicated by index
fs.writeFileSync('../src/photos_moons.js', `export const photos = ${mystring_1};`, 'utf-8')

