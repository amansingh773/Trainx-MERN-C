// Day 2

// Variables

// let age = 20;
// console.log(age);


// var,let,const

// var a = 10;

// a = 23;

// console.log(a);

// var a = 20;

// a = 34;

// console.log(a);


// let 

// let age = 20;

// age = 30;

// console.log(age);

// let age = 40;

// console.log(age);


// const 

// const age = 30;

// age = 40;

// console.log(age)

// Primitive and Reference Data Types

// String

// let name = "Aman"

// console.log(name);

// Number 

// let number = 123;

// console.log(number)

// Boolean

// let isLoggedIn = true;

// console.log(isLoggedIn);

// Undefined

// let age;

// console.log(age);

// Null

// let age2 = null;

// console.log(age2);


// BigInt
 
// let number1 = 123456789875432123456787654323467n;

// console.log(number1);

// Symbol

// let newUser = Symbol("id");

// console.log(newUser);

// Reference Data types

//  Array

// let arr = [123,"Aman",true,null,undefined,{name:"Aman",age:23},]

// console.log(arr);


// Object

// let obj = {
//      name:"Aman",
//      age : 23
// }

// console.log(obj);


// function

// function userAge()
// {
//      let age = 23;
//      console.log(age)
// }

// userAge();

// Primitive vs Refernce 

// let a = 10;
// let b = 20;

// b = 30

// console.log(a);
// console.log(b);

// Reference

// let user1 = {
//      name :"Rahul",
//      age : 25
// }

// let user2 = user1

// user2.name = "Abhay"

// console.log(user1)
// console.log(user2)


// Type conversion and Type coercion

// Type conversion

// let age  = "23";
// let newAge = Number(age)

// console.log(newAge);

// let age = 234;

// let newAge = String(age);

// console.log(newAge);

// Type coercion

// let a1 = 10;
// let b1 = "20";

// console.log(a1 + b1);

// let a1 = 20;

// let b1 = "10";

// console.log(a1 - b1);


// typeof operator


// Operators and Decision Making

// Arithmatic Operators

// let num1  = 10;
// let num2 = 20;

// console.log(num1 + num2); Addition

// console.log(num1 - num2); Subtraction

// console.log(num1 * num2); Multiply

// console.log(num1 / num2);Divide

// console.log(num1 % num2);Modulo Division Gives reminder

// console.log(num1 ** num2); exponential


// Day 3 Increment and Decrement

// Increment

// let count = 5;

// console.log(count++);
// console.log(count);

// Decrement 

// let count1 = 5;
// console.log(count1--);
// console.log(count1);


// Importtant Concept Post increment and Decrement 

// Post-increment

// let count2 = 10;
// console.log(count2++)
// console.log(count2)


// Pre-increment

// let count3 = 10;
// console.log(++count3);
// console.log(count3)



// Assignment Operators

// let num = 30;

// // num  = num + 10;

// console.log(num += 10);
// console.log((num -= 10));
// console.log((num  *= 2));
// console.log((num /= 10));
// console.log((num  %= 5));
// console.log((num **= 2));

// Logical Operators

// AND Operator &&

// let age = 19;
// let hasLicense = true;

// if(age > 18 && hasLicense)
// {
//      console.log(true)
// }


// OR operator

// let age = 19;n
// let hasLicense = false;

// if(age >= 18 || hasLicense)
// {
//      console.log("Drive");
// }


// Not operator

// console.log(!true);


// Comparison Operators

// console.log(10 > 5);

// console.log(10 < 5);

// console.log(10 >= 10);

// console.log(10 <= 5);

// console.log(10 == "10");  Loose Equality

// console.log(10 === 10);   Strict Equality


// Truthy and falsy value 


// Conditional Statement

// let age = 16;

// if(age > 18)
// {
//      console.log("eligible");
// }
// else
// {
//      console.log("Not Eligible")
// }


// else-if

// let marks = 90;

// if(marks >= 80)
// {
//      console.log("Grade A")
// }
// else if(marks >= 60)
// {
//      console.log("Grade B")
// }
// else if(marks >= 40)
// {
//      console.log("Grade C")
// }
// else
// {
//      console.log("Fail");
// }



// Switch Statement

// let day = 5;

// switch(day)
// {
//      case 1:
//           console.log("monday");
//           break;
//      case 2:
//           console.log("Tuesday");
//           break;
//      case 3:
//           console.log("Wednesday")
//           break;
//      default:
//           console.log("Invalid day")
// }

// ternary Operator

// let age = 14;

// let result = age > 19 ? "eligible" : "not eligible" ;

// console.log(result);


// Loop


// console.log(1)
// console.log(2)
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)
// console.log(11)
// console.log(12);

// for loop

// for(let i=1;i<=10;i++)
// {
//      console.log(i);
// }


// while loop

// let num = 1;

// while(num<=10){
//      console.log(num);
//      num++
// }


// do-while

// let num = 1;

// do
// {
//      console.log(num);
//      num++;
// }while(num<=5);


// break

// for(let i=1;i<=10;i++)
// {
//      if(i===5)
//      {
//           break;
//      }
//      console.log(i)
// }

// continue

// for(let i=1;i<=20;i++)
// {
//      if(i===8)
//      {
//           continue;
//      }
//      console.log(i);
// }


// Nested loop




// Pattern Printing

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *


// for(let i=1;i<=5;i++)
// {
//      let row = ""

//      for(let j=1;j<=5;j++)
//      {
//           row += "* "
//      }
//      console.log(row)
// }


// Input ,Output in js

// console.log("Hello js");

// alert

// alert("Please Login First");

// prompt

// let name1 = prompt("Enter your name");
// console.log(name1);

// table

// let table = [
//      {
//           name:"Aman",
//           age:23
//      },

//      {
//           name:"Rahul",
//           age:24
//      },

//      {
//           name:"Shivam",
//           age:25
//      }
// ]

// console.table(table)


// Error

// console.error("404 Not Found");

// warn

// console.warn("Something went wrong");

// template literals 


// let name = "Shivam"
// let age = 18

// console.log("My name is " + name + " and I am " + age + " old");

// console.log(`My name is ${name} and i am ${age} old`);


// function

// function greet()
// {
//      console.log("Hello");
// }

// greet()


// without  function

// console.log("Aman");
// console.log("shivam");
// console.log("Adarsh");

// With Function

// function Welcome(name)
// {
//      console.log(`Welcome to Our Website ${name}`)
// }

// Welcome("Aman ");
// Welcome("Shivam ");
// Welcome("Adarsh ");


// function calculation()
// {
//      let a = 10;
//      let b = 20;

//      console.log(a+b)
// }

// calculation()


// function printStar()
// {
//      for(let i=1;i<=5;i++)
//      {
//           let row = "";

//           for(let j=1; j<=5;j++)
//           {
//                row += "* "
//           }
//           console.log(row);
//      }
// }

// printStar();
// printStar()
// printStar()



// function printStar()
// {
//      for(let i=1;i<=5;i++)
//      {
//           let row = "";

//           for(let j=1; j<=5;j++)
//           {
//                row += "* "
//           }
//           console.log(row);
//      }
// }

// let result = printStar;
// result()


// parameter vs arguments

// function calculation(a,b)
// {
//      console.log(a+b);
// }

// calculation(10,20)










