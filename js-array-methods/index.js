const items = [
  { name: "Bike", price: 100 },
  { name: "Tv", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
  { name: "Bike", price: 150 },
];

// const filteredItems = items.filter((item) => {
//     return item.price <= 100;
// });
// console.log({items});
// console.log({filteredItems});

// const itemNames = items.map((item) => {
//     return item.name;
// });
// console.log(items);
// console.log(itemNames);

// const foundItem = items.find((item) => {
//     return item.name === 'Bike';
// });
// console.log(foundItem);

// items.forEach((item) => {
//     console.log(item.name);
// });

// const hasInExpensiveItem = items.some((item) => {
//     return item.price === 1000;
// });
// console.log(hasInExpensiveItem);

// const hasInExpensiveItem = items.every((item) => {
//     return item.price <=1000;
// });
// console.log(hasInExpensiveItem);

// const totalPrice = items.reduce((currentTotal, item) => {
//     return item.price + currentTotal;
// }, 0);
// console.log(totalPrice);

// const checkIsArray = (input) => {
//     return Array.isArray(input);
// }
// console.log(checkIsArray('test')); //false
// console.log(checkIsArray(['test'])); //true

// //type-1
// let car = {
//     name: 'bmw',
//     cost:2000,
//     color: 'red'
// }
// car.type="manual";
// console.log(car);

// //type-2
// function Car(name, color) {
// this.name=name;
// this.color=color;
// }

// const c1= new Car('bmw','red');
// console.log(c1);

// //type-3
// let Car = {
//     name: 'audi',
//     cost : 20000
// }
// const c2 = Object.create(Car);
// console.log(c2.name);

// //type-4
// class Car{
//     constructor(name,price){
//         this.name=name;
//         this.price=price;
//     }

//     getInfo(){
//         console.log(`this is ${this.name} with cost ${this.price}`);
//     }
// }
// const c3=new Car('ford',40000);
// console.log(c3);

// const result = () => {
//   const arrSize = 3;
//   const data = [];
//   for (let i = 1; i <= arrSize; i++) {
//     data.push("a");
//   }
//   console.log(data);
// };
// result();

// const arrFill = () => {
//   const res = ["b"];
//   const arrSize = 3;
//   console.log(res.fill("a", 0, arrSize - 1));
// };
// arrFill();

// const arraySize = 3;
// const result = new Array(arraySize).fill("a");
// console.log(result);

// const result = () => {
//   const arrSize = 3;
//   const data = [];
//   for (let i = 1; i <= arrSize; i++) {
//     data.push("a");
//   }
//   console.log(data);
// };
// result();

// const result = () => {
//   const arrSize = 3;
//   const data = [1, 2, 3];
//   const res = [];
//   for (let i = 1; i <= data.length; i++) {
//     res.push(data[data.length - i]);
//   }
//   console.log(res);
// };
// result();

// const reverse2 = (array) => {
//   array.map((el, id, givenArr) => {
//     console.log(givenArr.length - id - 1);
//     givenArr[givenArr.length - id - 1];
//   });
// };
// console.log(reverse2([4, 3, 2, 1]));

// const compact = (array) => {
//   array.map((elem, i, givenArr) => {
//     if (!!elem) {
//       console.log(typeof elem, givenArr[i]);
//       givenArr[i];
//     }
//   });
// };
// const data = [0, 1, false, 2, undefined, "", 3, null];
// console.log(compact(data)); // [1, 2, 3]

// const compact = (array) => array.filter((el) => el);
// const data = [0, 1, false, 2, undefined, "", 3, null];
// console.log(compact(data)); // [1, 2, 3]

// const compact = (array) => array.filter(Boolean);
// const data = [0, 1, false, 2, undefined, "", 3, null];
// console.log(compact(data)); // [1, 2, 3]
