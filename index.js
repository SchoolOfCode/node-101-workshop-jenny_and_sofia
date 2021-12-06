let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
      whatILike: "It has my cute pixel character on it!"
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 1,
      whatILike: "Eat. Sleep. Code. Repeat :)"
    }
  ];
  function describeItem(item){
      if (item.count===1){console.log(`i have a ${item.name}.here's what i like about it: ${item.whatILike}`)}
    else {
        console.log(`i have ${item.count} ${item.name}s here's what i like about them ${item.whatILike}`)
    }
}
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



