// so this is the example of high order function 
// const arr=[2,5,4,8,6]
// const output=[]
// const area=(radius)=>{
//     const ans=22/7 * radius*radius;
//    return ans; 
// }
// const circumference=(radius)=>{
//     const ans=2*(22/7 * radius);
//    return ans; 
// }
 
// const calculate=(arr,logic)=>{// logic is an function used as a parameter
// for(let i=0;i<arr.length;i++){
//     output.push(logic(arr[i]))
// }
// return output;
// }
// console.log(calculate(arr,circumference));// here we are passing a function in another function like circumference as an argument



//---------------------------------------map, filter , reduce----------------------------------------------------------------------------



// let us go through map filter reduce function how it is used in javascript
// suppose a array is given 
 
// var arr2=[1,2,3,4,8];

// const array=arr2.map((num,i,arr)=>{
//   return num*2
// })
// console.log(array)

// console.log(arr2.filter((e)=>e%2===0?e:null))// filter method

// const reduce=arr2.reduce((acc,cur)=>{
//  return arr+cur;
// },0)
// console.log(reduce)

//MAP vs FOREACH loop
// map create a new array when we perfon any update on the original array
// for each will not create a new array if we call any update function then it will modify the original array

// arr2.forEach((e,index)=>(
  
//     arr2[index]=e*2
    
// ))
// console.log(arr2)


// question 1:
// const value=[
//     {name:"aryan",roll:20,class:6},
//       {name:"aman",roll:10,class:9},
//         {name:"aayan",roll:40,class:3},
//           {name:"aarman",roll:90,class:12}
// ]

// const mapping=value.map((e)=>{

//  return e.name.toUpperCase();
// })
// // console.log(mapping);
// const filter=value.filter((data)=>data.roll>20)
// // console.log(filter)

// const reduceFun=value.reduce((acc,cur)=>{
// return  cur.roll+acc
// },0)
// console.log(reduceFun)


// --------------------------------------------------Functions (hoisting callback Arrow functions )--------------------------------------

// in javascript callback are the functions which are stored inside an another function to bring asynchronus 

// let me give one example

// function  outer(y){
// console.log('inside x');
//   y()
// }
// outer(function y(){
//   console.log("y here")
// })



// function reverse(y){
//  let sum=0
//   while(y!=0){
//      let rem=y%10;
//      sum=sum*10+rem;
//      y=Math.floor(y/10);
//   }
//   console.log(sum);
// }
// reverse(123)






//---------------------------------------------------Closures in javaScript----------------------------------------------------------

// a closure gives u an access of the outer function and we can use the  variables declare outside the function when two functions are bounded together 
// with a lexical scope


//global scope
// const  closure=()=>{
//   var value=20; // locla 
//   function innerScope(){
//     alert("the value is "+value); 
//   }
//   innerScope();
// }

// closure();


// question 1--

// function  annonymous(num){
// return function (innerValue){  // annonymous function
// console.log(num+innerValue)
// console.log(innerValue)
// }
// }

// var addValue=annonymous(6);
// addValue(10)  // the output will be 16 becaeuse  function will called as value(6)(10);
// addValue(20) // the output will be 16 becaeuse  function will called as value(6)(20);


// function print(){
//   for(var i=0;i<3;i++){
//     setTimeout(()=>{
// console.log(i)
//     },1000)
//   }
  
// }






// ----------------------------------------------------------------------Functions in js-----------------------------------------------

// anonymous funtions-------
//   const hello=function(){
//     return 2*2;
//   }
// console.log( hello());

// first class function 
 
// in first class function one function is  called in another function 
// function  area(radius){
//   return radius* radius;
// }

// function  secondfun(fn){
//  console.log("square is "+ fn(5));
// }
// secondfun(area)

// what is IIFEE??
 
// (
//   function square(num){
// console.log(num*num)
//   }
// )(5)

// function hoisting?

// hello()  // in js function can be hoisted which means we can declare it before initialization
// function hello(){
//   console.log("hoisted function")
// }


// function outerFunction(){
//   let a=21;
//   function innerFunction(){
  
//     console.log(a)
// let a=20;   // referenece error in let & in var it will give undefined
//   }
//   innerFunction()
// }
// outerFunction()



// spread and rest operator

// function rest(...num){   // and this is rest operator which is used in parameter
//   console.log(num)
// }
// let arr=[4,5,6];
// rest(...arr);// here spread operator is used

// function restone(a,b,c,...d){
//   console.log(a,b,c,d)
// }
// restone(3,2,5,6,9,8);

// //Arrow functions vs normal function

// function test() {
//   return 
//     {
//       name: "Aryan"
//     }
// }

// console.log(test());  // undefined because   there is a semi colon used after the return is completed 


// -----------------------------------------------------------------------Closure in Js-----------------------------------------------
  // In closure  when any function is binded with its outer lexcial scope or having reference to its parents function 
  // then it called closure 
  // for example
// function outest(z){  
// function outer(x){

//    function inner(y){ // here we can see that  function inner is bind with its lexical scope outer function
//      console.log(x+y)
//      }
//    inner(z) 
//   }
//   outer(20)
// }

// outest(20) //  from the output we can see that  function is forming a  closure chain  with its lexical environment 

//  closure is used to provide data  hiding and encapsulation in code 
// for example
  
// function Outer(count){
//   this.increment=function(){   // so in this code we are forming a constructor function to get the exact  function when it is called
// count++;

//   }
//   this.decrement=function(){
//     count--;
//      return count;
//   }
// }

// let value=new Outer(5);
// console.log(value.decrement())
// console.log(value.decrement())
// console.log(value.decrement())



// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const counter1 = createCounter(); // creates first closure
// counter1(); // ?  //1
// counter1(); // ?//2

// const counter2 = createCounter(); // creates a new closure
// counter2(); // ?  //1




// -----------------------------------------------------------------async & await-------------------------------------------------

// what is async ?

// async is a keyword which is used to create a asynchronous function in javascript 

//always return a promise 

// async function getPromise(){ 
//   return "hello"
// }
// so here it will return fullfilled promise 

// const promiseFun=async()=>{return "hello"}
// const getdata=promiseFun()

//async and await are used to handle promises in js
  

// const p=new Promise((resolve,reject)=>{   // we can  see this is promise
// setTimeout(()=>{
//   resolve("promise is resolve successfully");
// },10000)
// })

// // so in this program we can see that if we dont use await in async function and console the
// // p function it will console after 10 second and first it will print the other console value 
// // but when  we use await it  pause othe  execution of code and execute  that value of await  
// async function promiseResolve(){   // this is async function 
//   const val=await p;   // await is use to resolve the async function  it is only be used inside an async function 
// console.log(val)
//   console.log("sorry u are late")
// }
// promiseResolve()  
 


const p1=new Promise((resolve,reject)=>{   // we can  see this is promise
setTimeout(()=>{
  resolve("promise p1 is resolve successfully");
},10000)
})
const p2=new Promise((resolve,reject)=>{   // we can  see this is promise
setTimeout(()=>{
  resolve("promise p2 is resolve successfully");
},5000)
})
async function promiseResolve(){   // this is async function 
  const val=await p1;   // await is use to resolve the async function  it is only be used inside an async function 
console.log(val)
  console.log("sorry u are late")

    const val2=await p2;   // await is use to resolve the async function  it is only be used inside an async function 
console.log(val2)
  console.log("sorry u are late")


}
promiseResolve()  






  










