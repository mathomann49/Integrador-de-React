

// const getRandomProducts = (quantity) => {
//     const products = response.data;
//     console.log(products.length);
//     const newArray = [];
//     while (newArray.length < quantity) {
//         const indexRandom = Math.floor(Math.random() * products.length);

//         if(!newArray.length) {
//             newArray.push(products[indexRandom]);
//         }
//         const existingProduct = newArray.find((newProduct) => {
//             return newProduct.id === products[indexRandom].id;
//         });
        
//         if(!existingProduct) {
//             newArray.push(products[indexRandom]);
//         }
//     }
//     return newArray
// };