// alert("hi");
// console.log("hi");

// variables
// var, let, const
// var fullName ="Haris Naseer";//string
// let age=24;//number
// const isPakistani=true;//boolean
// isPakistani=false;//error

// let age=35;
// var fullName="Ali";
// var fullName="Ali";
// var fullName="Ali";

// let a;//declaration
// a=87;//intialization
// // a=78;
// //  a=343;

//  let num1=23;
//  let num2="3fdgfdsgf";

//  //operators
//     //arithmatic operators + - * / %
//     console.log(num1+num2);//concatenation 
//     console.log("Haris"+" "+"Naseer");//concatenation 
//     console.log(num1-num2);
//     console.log(num1*num2);
//     console.log(num1/num2);
//     console.log(num1%num2);
    //increment decrement ++ --
//post increment

// console.log(a++);//a=a+1=>88
// console.log(a);

// pre-increment
// console.log(++a);
// console.log(a);
// ++a;//a=a+1=>89
// a--;

// --a;

    //assignment operators = += -= *= /= %=
// let b=5;
// b+=4;//b= b+4 => 5+4=>9
// b-=4;//b= b-4 => 9-4=>5
// b*=4;//b= b*4 => 5*4=>20
// b/=4;//b= b+4 => 20/4=>5
// b%=4;//b= b+4 => 5%4=>1
// console.log(b);
    //comparison operators == === != > < >= <= (bool i.e true or false)

// console.log(b=='5');//true

// console.log(b==='5');//false
// console.log(b !='5');//false
// console.log(b !=='5');//true
// console.log(b < 67);//true
// console.log(b > 4);//true
// console.log(b >= 4);//true
// console.log(b <= 4);//false


    //logical operators && || !

    // console.log(b<89 && b==8 && b<=45);//false

    // console.log(b<89 ||!(b<89)|| b<=45);//true

    // console.log(!(b<89));//false

    // username||email||phone  && password
// "haris"                         "sadjhf123" => true
// "haris@gmail.com"                         "sadjhf123"=>true


// Conditional Statements
// if else
// if (43759827432798 > 43759827432798  && 487658435!=7326483264) {
//     console.log("if chal gaya");
// } else {
//     console.log("else chal gaya");
    
// }
// nested ifs

// if (7 == 7) {
//     console.log("if chal gaya");
//     if (8 !=7) {
//         console.log("nested if chal gaya");
//     }else{
//         console.log("nested else chal gaya");
//     }
// } else {
//     console.log("else chal gaya");
    
// }
// if else ladder
// if (43759827432798 > 43543543543543543545  && 487658435!=7326483264) {
//     console.log("if chal gaya");
// } else if(8-8==0){
//     console.log("else if chal gaya");
    
// }else{
//     console.log("else chal gaya");

// }
// switch


// let number=1;
// switch (number) {
//     case 1:
//         console.log("Monday");
//         break;
//      case 2:
//      console.log("Tuesday");
//    break;
//    case 3:
//     console.log("Wednesday");
//     break;
//  case 4:
//  console.log("Thursday");
// break;
//     default:
//         console.log("I Don't know");
//         break;
// }


//jump statements(break , continue)

// ternary operator

console.log( 90-5>=23 ?"hi":"bye");


//loop (to repeat a task till a condition)
//for loop (when we know the number of iterations);
// initialization; condition; increment/decrement
// i here is a loop variable and iterator and have a local scope;

// for(let i=1;        i <=10000;     i++){

// console.log(i);
// }
// 
// reverse loop
// table of 7 till 23



//while loop
// let i=1;
// while(i<=10)
// {
//     if (i%2!=0) {
        
//         console.log(i);
//         i++;
//     }else{
       
//         i++;//i=8
//         continue;//skip the odd numbers
//     }
   
//  }

// let i=12;
// while(i<=10)
// {
//    console.log(i);
//    i++;
   
//  }


//do while loop

// let i=12;
// do
// {
//    console.log(i);
//    i++;
   
//  }while(i<=10);


//functions
//defining a function
// function greet(){
//     console.log("Hello world")
// }

//invoke / call
// greet();

//returning function;
// function greetHi(){
//     return "Hi";
// }


// let greet=greetHi();//Hi
// console.log(greet);

//parameters
// function greetWithName(name){
//     console.log("Hi "+name);
// }

// //arguments
// greetWithName("Haris");
// greetWithName("Shehzad");
// greetWithName("Kabeer");


// function add(a,b){
// return a+b;

// }

// let c=add(5,5);//10
// console.log(c)

// console.log(add(25,5))

//arrow function
// let addition=(a,b)=>a+b;
// addition(5,5);


//arrrays (collection of elements/values)
let students=["Ali","Ahmed","Haris","Kabeer","Shehzad"];
let employees=["Ali","Ahmed","Haris","Kabeer","Shehzad"];
let Dishes=["Biryani","Qorma","Karahi","Handi","Pulao","Kabab"];

// index = 0-4
// length = 5
console.log(students.length)
console.log(students[3]);
for(let i=0;i<students.length; i++){

    // document.write("Name => "+students[i] +"<br>");
    document.write(`Name => ${students[i]} <br>`);//string interpolation
}

function printArray(arr,heading){
    for(let i=0; i<arr.length;i++){
        document.write(`${heading +" "+ (i+1)}  : ${arr[i]}<br>`);
    }
}

printArray(students,"Students");
printArray(employees,"Employees");  
printArray(Dishes,"Dishes");


//objects
//dom
//regexp
//web worker
//minification
//es6
//asychronous programming
