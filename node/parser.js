const fs = require('fs');

// READ FILE =======

fs.readFile('./database.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`Error reading file: ${err}`);
    } else {
        const databases = JSON.parse(data);
        const newdata = JSON.stringify(databases, null, 4)
        console.log(newdata)
        fs.writeFile('./user.json', newdata, 'utf8', (err) => {
            if (err) {
                console.log(`Error writing file: ${err}`);
            } else {
                console.log(`Success!`);
            }
        })
    }
})



// const databases = require('./database.json')
// databases.forEach(db => {
//     console.log(`${db.name}: ${db.type}`)
// })

// Reads more complex data to console
// fs.readFile('./source.json', 'utf8', (err, data) => {
//     if (err) {
//         console.log(`Error reading file: ${err}`);
//     } else {
//         const databases = JSON.parse(data);
//         // console.log(data)
//     }
// })

// // MAP FILE =======
// const source = require('./source.json')
// const dataset = source.image_sets[0].image_with_text;
// const makestring = JSON.parse(dataset)
// console.log(makestring)
// const datatrimmed = data.map(item => `{"${item.text}": "${item.image.url}"}`)
// const datatrimmed = data.map(item => item.text + item.image.url)
// console.log(datatrimmed)







// WRITE FILE ======
// let user = {
//     name: "john doe",
//     email: 'john.doe@example.com',
//     age: 27,
//     gender: 'shemale',
//     profession: 'Songwriter'
// };

// // Simpler data
// let user = require('./database.json')

// More complex data
// let user = require('./source')

// const newdata = JSON.toString(datatrimmed, null, 4);
// const newdata = JSON.parse(datatrimmed)
// console.log(newdata)
// fs.writeFile('./user.json', newdata, 'utf8', (err) => {
//     if (err) {
//         console.log(`Error writing file: ${err}`);
//     } else {
//         console.log(`Success!`);
//     }
// })