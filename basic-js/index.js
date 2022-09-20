// const people = [
//     { name: 'Niti',age:20},
//     { name: 'Manish', age: 20},
//     { name: 'Raja', age: 18},
// ];

// const finalObj = people.reduce((groupedPeopleObject,person) => {
//   if(groupedPeopleObject[person.age] == null) groupedPeopleObject[person.age]=[];

//   groupedPeopleObject[person.age].push(person);

//   return groupedPeopleObject;

// },{});

// console.log(finalObj);



// const numbers=[13, 2, 5];

// const totalNumbers = numbers.reduce((total,num,index,arr) => {
//     console.log(`Total: ${total}`);
//     console.log(`NUm: ${num}`);

//     return total + num;
// });

//console.log(totalNumbers);



// const people = [
//     { name: 'mac', price: 10},
//     { name: 'dell', price: 5},
//     { name: 'lenovo', price: 20},
// ];

// const totalPrice =  people.reduce((total,item) => {
//     console.log(`total: ${total}`);
//     console.log(`item: ${item.price}`);
   
//     return total + item.price;
// }, 0); 

// console.log(totalPrice);

// let obj = {
//     name:'manish',
//     age: 28,
// }
// console.log(`Before : ${JSON.stringify(obj)}`);

// obj.place = 'bangalore';
// console.log(`After-1 : ${JSON.stringify(obj)}`);

// obj["job"]="SE";
// console.log(`After-2: ${JSON.stringify(obj)}`);

// subObj = { place: 'JH'};
// obj={...obj,...subObj}
// console.log(`After-3: ${JSON.stringify(obj)}`)




// function SumArr(arr){
  
//    let res=  arr.reduce((initialVal, currVal) => {
//         return initialVal + currVal;
//     });
    
//     return res;
// }

// console.log(SumArr([1,2,3,4 , 5]));

// SumArr([1,2,3,4]);

// const dates = [
//     '2019/06/01',
//     '2018/06/01',
//     '2019/09/01', // This is the most recent date, but how to find it?
//     '2018/09/01'
//   ]
// function ReturnLatestDate(arr){

//     let res = dates.reduce((latest, d) => {
//         return d > latest ? d : latest;
//     }, dates[0]);
//     return res;
// }


// console.log(ReturnLatestDate(dates));


// const array1= [1,2,3,4,5];

// const map1 = array1.map(x => x*2);

// console.log(map1);


// const kvArray = [
//     {key:1, value:10},
//     {key:2, value:20},
//     {key:3, value:30}
// ];


// const reformattedArray = kvArray.map(({key, value}) => ({
//     [key]:value
// }));


const kvArray = [{ key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }];

const reformattedArray = kvArray.map(({ key, value}) => ({[key]: value}));

// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]

