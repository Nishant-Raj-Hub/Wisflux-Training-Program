const { error } = require('console');
const fs = require('fs');

// fs.writeFile('hello.txt', "Hello World!", (error)=>{
//     if(error)
//         console.log(error)
//     else
//         console.log("File written successfully");
// })

// fs.appendFile('hello.txt', " This is the second adding.", (error)=>{
//     if(error)
//         console.log(error)
//     else
//         console.log("File written successfully");
// })

fs.readFile('hello.txt', 'utf-8', (error)=>{
    if(error)
        console.log(error)
    else   
        console.log(("File Read successfully"))
})
