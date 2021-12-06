import myCollection from "./collection.js"

import chalk from 'chalk';

  function describeItem(item){
      if (item.count===1){console.log(`I have a ` + chalk.cyan(`${item.name}`) + `. Here's what i like about it:` + chalk.green(`${item.whatILike}`))}
    else {
        console.log(`i have ` + chalk.yellow(`${item.count}`) + chalk.cyan(` ${item.name}s`) + `Here's what i like about them: ` + chalk.green(`${item.whatILike}`))
    }
}


// console.log(chalk.blue('Hello world!'));

// Make the name of each item in your collection cyan
// Make the count of each item in your collection yellow
// Make what you like about each item in your collection green

describeItem(myCollection[0])

function describeCollection(array){
    for (let i=0;i<array.length;i++){
        describeItem(array[i])
    }
}
describeCollection(myCollection)





// let myCollection = [ {
// brand: "Nike",
// style: "Air Jordan",
// color: "blue",
// },
// {
//     brand: "Nike",
//     style: "Dunk",
//     color: "purple",
//     },

//     {
//         brand: "Nike",
//         style: "Air Jordan",
//         color: "pink",
//         },
//         {
//             brand: "Nike",
//             style: "Air Force 1",
//             color: "pink",
//             },
//             {
//                 brand: "Nike",
//                 style: "Air Force",
//                 color: "blue",
//                 },


// ]
// console.log(myCollection);



