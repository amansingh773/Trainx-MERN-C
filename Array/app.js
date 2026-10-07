// Introduction to Array 

// let arr = [1,2,3,4,10,5,6,7,89,9,0];

// console.log(arr);


// Array Indexing

// let arr = ["Apple","banana","orange"];
// console.log(arr[0]);

// Array length

// let arr = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,5,6,7,8,8,];

// console.log(arr.length);




// Array can store different data types

// let arr = [1,"apple",true,false,null,undefined,{}];
// console.log(arr);


// creating an empty array and adding values

// let arr = [];

// arr[1] = "apple";

// console.log(arr);

// Array Operations

// push add an element from last and return new length

// let arr = ["apple","mango","orange"];
// console.log(arr);

// arr.push("banana");
// console.log(arr)

// pop remove element from last and return removed value

// let arr = ["apple","mango","orange"];
// console.log(arr);

// console.log(arr.pop())

// console.log(arr)


// unshift add value in starting of an array and return new length

// let arr = [1,2,3,4,5,6,7];

// console.log(arr);

// arr.unshift(10,11)

// console.log(arr)

// shift

// let arr = [1,2,3,4,5,6,7,8,9];

// console.log(arr);

// arr.shift()
// arr.shift()
// console.log(arr);

// Splice is used to add,remove and replace elements in array

// remove

// let arr = [1,2,3,4,5,6,7,8,9];

// arr.splice(2,3);

// console.log(arr);

// add

// let fruits = ["apple","mango","orange"];

// fruits.splice(1,0,"banana")

// console.log(fruits)

// slice  is used to return a new portion of an original array

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let returnedArray = arr.slice(2,9);

// console.log(returnedArray);
// console.log(arr);


// includes

// let numbers = [1,2,3,4,5,6,7,8,9];

// console.log(numbers.includes(15));


// Array iteration methods

// forEach

// let arr = [10,20,30,40];

// arr.forEach(function(number){
//      console.log(number*2)
// })

// with arrow function 

// let arr = [10,20,30,40];

// arr.forEach((number)=>{
//      console.log(number)
// })

// accessing index with forEach

// let arr = [10,20,30,40]

// arr.forEach((number,index)=>{
//      console.log(number,index)
// });

// for of loop

// let arr = [10,20,30,40,50];

// for(let num of arr)
// {
//      console.log(num);
// }


// Functional Array methods

// map()

// let arr = [10,20,30,40,50,60];

// let newArr = arr.map((number)=>{
//      return number ** 2
// })

// console.log(newArr);


// filter 


// let arr = [1,2,3,4,5,6,7,8];

// let newArr = arr.filter((number)=>{
//      return number % 2 == 0
// })

// console.log(newArr);


// reduce


// let arr =[10,20,30,40,50,60];

// let newValue = arr.reduce((sum,number)=>{
//      return sum + number
// },0)

// console.log(newValue);


// find()

// let arr = [1,2,3,4,5,6,7,8,9];

// let newValue = arr.find((number)=>{
//      return number > 3
// })

// console.log(newValue);


// some()

// let arr1 = [1,2,3,4,5,6,7,8,9];

// let newVal = arr1.some((number)=>{
//      return number % 2 == 0
// })

// console.log(newVal);


// every()

// let arr2 = [1, 3,5, 7, 9];

// let newVal1 = arr2.every((number)=>{
//      return number % 2 !== 0
// })

// console.log(newVal1);



// concat()

// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];

// let newArr = arr1.concat(arr2)

// console.log(newArr)

// sort() method

// let arr = [10,100,20,90,30,80,40,70,60,50];

// let sortedArray = arr.sort((a,b)=> b - a);

// console.log(sortedArray)



// sort() method without compare function

// let arr = [10,100,20,90,30,80,40,70,60,50];

// console.log(arr.sort())


// Array Destructuring

// let arr = [10,20,30,40];

// let [a,b,c] = arr;

// console.log(a)
// console.log(b)
// console.log(c)


// default value 

// let arr = [10,20,30];

// let [a, b, c, d = 40 ] = arr;

// console.log(a,b,c,d)


// skipping values

// let arr = [1,2,3,4,5];

// let [a,b,c,,e] = arr

// console.log(a,b,c,e);




