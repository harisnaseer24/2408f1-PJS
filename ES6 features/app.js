//ES 6 Features
// 1. Arrow Functions
// annonymous function => arrow function (self calling or IIFE / callback function)
// (()=>{
//     console.log("hi")
// })();

// (function(){
//     console.log("hi");

// })();

//name functions 
// function hi(){
//     console.log("hi");
// }
// hi();

// let hi=()=>console.log("hi")

// hi();

// let giveTen=()=>10

// giveTen();
// we can remove () if there is only one parameter
// let giveValue= value=>value+10

// console.log(giveValue(50));



// 2. Template Literals
// let fname= "Haris"
// let lname= "Naseer"
// // let fullName= "MR. "+fname+" "+lname //simple concatenation
// let fullName= `Mr. ${fname} ${lname}` // template literals

// 3. Destructuring
// let user={
//     name:"Haris",
//     age:23,
//     phone:334793744434,
  
   
// }
// let {age, name ,phone}=user //destructuring
// console.log(age, name, phone)

// 4. Default Parameters

// let add =(a=0,b=0)=>a+b

// console.log(add(10)) //  10 + 0 = 10
// console.log(add(10 , 9)) //  10 + 9 = 19

// 5. Rest Operator and Spread Operator

//Rest Operator (if function parameter has ... operator then its called rest operator)
// [3,4,9,1]
// (first, second)=> first +second,0


// let add =(a=0,b=0,...c)=>a+b + c.reduce((a,b)=>a+b,0)
// console.log(add(1,2,3,4,9,1))

//Spread Operator (if function parameter has ... operator then its called rest operator)

// let fruits=["apple","banana","orange"];

// let fruitAndVegies=["potato","onion","corriander",...fruits]
// console.log(fruitAndVegies)

// 6. let, var and const
// let and const are block scoped variables
// var is global scoped variable

// if(true){
//     let name="Haris"
//     const age=23
//     var city="karachi"
// }
// console.log(name)
// console.log(age)/
// console.log(city)

// 7. Classes and Objects
// let user1 ={
//     name:"Haris",
//     age:23,
// }
// let user2 ={
//     name:"Owais",
//     age:23,
// }

//blue print of user object
// class User{
//     constructor(name, age){
//         this.name=name;
//         this.age=age;
//     }
  
// }

// let user1 = new User("Haris",23);
// let user2 = new User("Owais",23);
// let user3 = new User("Usama",23);
// let user4 = new User("Afzal",23);
// let user5 = new User("Hassan",23);


// console.log(user5.name,user5.age)

// 8. Modules
// 9. Array Methods