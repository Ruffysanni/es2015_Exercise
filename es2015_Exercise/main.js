// .....convert the following es5 codes into es2015 code 

// 1: 
// var person = {
//     fullName: "Harry Potter",
//     sayHi: function(){
//         setTimeout(function(){
//             console.log("Your name is " + this.fullName)
//         }.bind(this),1000)
//     }
// }

// Answer:
const person = {
    fullName: "Harry Potter",
    sayHi(){
        setTimeout(()=> console.log("Your name is " + this.fullName),1000)
    }
}


// 2:
// var name = "Josie"
// console.log("When " + name + " comes home, so good")


// ANswer:
let name = "Josie"
console.log(`When ${name} comes home, so good`);


// 3:
// var DO_NOT_CHANGE = 42;
//    DO_NOT_CHANGE = 50; // stop me from doing this!

// Answer:
const DO_NOT_CHANGE = 42;


// 4:
// var arr = [1,2]
//    var temp = arr[0]
//    arr[0] = arr[1]
//    arr[1] = temp

// Answer:
let arr = [1,2]
  let [a,b] =  arr;
  arr = [b,a];


//  5:
//  function double(arr){
//     return arr.map(function(val){
//       return val*2
//     });
//    }

//    Answer:
 const double = arr => arr.map(val => val*2);


//  6:
//  var obj = {
//     numbers: {
//        a: 1,
//        b: 2
//    } 
//  }

//  Answer:
 const obj = {
     numbers: {
        a: 1,
        b: 2
    } 
  }


let {numbers:{a,b}} = obj;


//7
const add = (a = 10, b = 10) => a+b;


//8: Research the following functions - what do they do?

// Answer:
// Array.from: This a method that returns an array object from an iterable object.
// Object.assign: The Object.assign() method copies all enumerable and own propreties from the source objects to the target  objects. It can be used to merge or clone objects.
// Array.includes: The Array.includes() method determines whether an array contain a specified element. The method returns true or false depending on if the specified element is found.
// String.startsWith: The Array.startsWith() method is used to determine if  a given string starts with a specified letter or word. It returns either true or false.

