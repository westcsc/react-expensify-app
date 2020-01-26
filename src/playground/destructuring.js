// // const person = {
// //     name: 'Bruce',
// //     age: 63,
// //     location: {
// //         city: 'Rockport',
// //         temp: 64
// //     }
// // };

// const book = {
//     title: 'Ego is the Enemy',
//     autor: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name :publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

// // Array destructuring

// const address = ['614 S. Verne', 'Rockport', 'Texas', '78382'];

// const [, city, state] = address;

// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (Iced)', '$3.00', '$3.50', '$3.75'];

const [coffee,,mediumPrice] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}`);