

// Promise----------------------------------------------------------------------


// const pro1=function(){
//     return new Promise((res,rej)=>{
//         res('first ')
//     })
// }
// const pro2=function(res1){
//     return new Promise((res,rej)=>{
//         res(res1+ ' second ')
//     })
// }
// const pro3=function(res1and2){
//     return new Promise((res,rej)=>{
//         rej(res1and2+ ' third  not resolved ')
//     })
// }
// pro1().then((response)=>{
//     return pro2(response)
// })
// .then((response)=>{
//     return pro3(response)
// })
// .then((response)=>{
//     console.log(response+ 'done');
// })
// .catch(err=>{console.log(err+'its error');})


// Array---------------------------------------------------------------------


// const array=['first',2,'second'];
// const [one,two,three]=array
// console.log(two);

// Server creation---------------------------------------------------------------------

// const http = require('http');
// const fs = require('fs');

// http.createServer((req,res)=> { 
//     fs.readFile('index.html', function (err,data) {
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         res.write(data);
//         console.log(data);
//         res.end();
//     })
// }).listen(4000);

// ...............................

// const http=require('http');

// http.createServer((req,res)=>{
//     res.write('Its the new page')
//     res.end()
// }).listen(9000);


// ............callback.................................................................


// const express=require('express');
// const app=express();

// app.listen(3000,function cb(){
//     console.log('hello');
// })
// console.log('first');

// console.log("Ready");
// setTimeout(function cb(){
//     console.log("End");
// }, 3000);
// console.log("Start");


// ................fill............................................................

// const array = [ 25 , 441 , 41 , 53];


// const output = array.fill(5);

// console.log(output);

// ..............every............................................................

// const array = [10 ,2 , 30, 4 ,50];

// function x(p){
//     if(p%2==0){
//         return p;
//     }
// }

// const output = array.every(x)

// console.log(output);


// .............filter....................................................................

// const array = [1 , 2 , 3, 4 ,5];

// function fil(x){
//     if(x>2){
//         return x;
//     }
// }

// const output = array.filter(fil)
// console.log(output);

// ..............................

// const array = [ 1 , 2, 3, 4 ,5 ];
// const output=array.filter((x)=> { return x>2 })
// console.log(output);

// ........................for loop in array.....................................................
// const array = [1, 2, 3, 4 ,5];

// function loopSum(){
//     sum=0;
//     for ( i=0 ; i<array.length ; i++)
//     {
//         sum=sum+array[i];

//     }return sum;
// }

// console.log(loopSum());

// ...............promise.........................................................................

// const promise=new Promise((res,rej)=>{
//     res(['hi'])
// })
// const promise2=new Promise((res,rej)=>{
//     res(['hmm'])
// })
// promise.then((response)=>{
//     console.log(response);
// })
// promise2.then((response)=>{
//     console.log(response);
// })



// .........promise all.......................

// const promise=new Promise((res,rej)=>{
//     res(['hi','hello'])
// })
// const promise2=new Promise(((res,rej)=>{
//     res(['hey','hoi']);
// }))
// const promise3=new Promise((res,rej)=>{
//     rej(['not','now'])
// })

// const promises=Promise.all([promise,promise2,promise3])
// promises.then((response)=>{
//     console.log(response.flat())
// })
// .catch(err=>{console.log(err);})


// .........promise async & await..........................

// const promiseMine=new Promise((res,rej)=>{

//     res('resolved')
// })
// const promise2=new Promise((res,rej)=>{
//     rej('rejected')
// })
// async function data(){
//     const response=await promiseMine;
//     console.log(response);
// }
// data();
// async function data2(){
//     const response=await promise2.catch(err=>{console.log(err);})
// }
// data2();

// ............promise async & await with try catch.....................

// const promise=new Promise((res,rej)=>{
//     rej('Resolved')
// })
// async function data(){

//     try {
//         const response=await promise;
//         console.log(response);
//     } catch (error) {
//         console.error(error);
//     }
// }data()
// ....................
// const promise=new Promise((res,rej)=>{
//     rej('n resolved')
// })
// const  data=async ()=>{
// try {
//     const response=await promise;
//     console.log(response);

// } catch (err){
//     console.log(err);

// }
// data()

// ............map.....................................................................................

// const array = [1 , 2 ,3 , 4 ,5];

// function add(x){
//     return x+2;
// }

// const output = array.map(add);
// console.log(output);

// ............reduce.....................................................................................


// const array=[1,2,3,4,5];
// const output=array.reduce((acc,val)=> acc+val,0)
// console.log(output);


// ............entries object method.....................................................................................

// const arr= {
//     name: "haari",
//     key: "secret",
//     n: 22
// }
// const ke=Object.entries(arr)
//   console.log(ke);



// ............find.....................................................................................


// const array=[1,2,3,4,5];


// const output=array.find(cb)
// console.log(output);

// function cb(fin){

//     return fin>4;
// }

// ............do while..........................................................................................

// var i=0;
// do{
//     console.log(i);
//     i++
// }
// while(i<=5);
// ......................................................................................................

// ...........while..........................................................................................
// i=0;
// while (i<6) {
//     console.log(i);
//     i++
// }

// ...........try catch..........................................................................................

// const r=require('readline-sync')
// var n1=r.questionInt('Enter i');
// try{
//     if(i==0); throw 'error';
// }
// catch(error){
//     console.error('err');
// }
// finally{
//     console.log('Thank You');
// }

// ...........strict mode ..........................................................................................

// "use strict"; 
// a=5;
// console.log(a);

// ...........promise ..........................................................................................

// const myPromise=new Promise((res,rej)=>{
//     setTimeout(() => {
//         rej('not resolved')
//     }, 2000);
// })
// myPromise.then((response)=>{
//     console.log(response);
// })
// .catch((error) => { console.log(error)})

// ..........arrow function ..........................................................................................


// var a = ()=>{
//     console.log('hello');
//     console.log('Hai');
//     return 2;
// }
// console.log(a());



// ...............for of...................................................................................


// const array=[1,2,3,4,5];

// for(property of array){
//     console.log(property);
// }

// ...............isnan..................................................................................


// function milliseconds(x) {
//     if (isNaN(x)) {
//       return x;
//     }
//     return x * 1000;
//   }

//   console.log(milliseconds('100F'));

// ...............for each...................................................................................


// const array1 = [1,2,3,4,5];

// i=0;
// array1.forEach((element)=>{
//     array1[i] = element*100;
//     i++;
// })
// console.log(array1);

// ....................................................

// const array=['hey','hum','haa','hoh','hay'];

// array.forEach((item,index)=>{
//     console.log(item,index);
// })

// ...............Array destructuring...................................................................................



// var [first,second,third]=['hai','hm','hus'];
// var array=[first,second,third]
// console.log(array);

// const string= 'news'

// var str=string.toUpperCase()
// console.log(str);



// 2d Array. Adding....................................................


// var r=require('readline-sync');

// const array1=[];
// const array2=[];
// let sum=[];

// console.log('enter values: ');
// for(let i=0; i<2; i++){
//   array1[i]=[];
//   for(let j=0; j<2; j++){
//     array1[i][j]=r.questionInt();
//   }
// }

// console.log('enter values of 2nd array: ');
// for(let i=0; i<2; i++){
//   array2[i]=[];
//   for(let j=0; j<2; j++){
//     array2[i][j]=r.questionInt();
//   }
// }

// for(i=0; i<2; i++){
//   sum[i]=[];
//   for(j=0; j<2; j++){
//     sum[i][j]=array1[i][j]+array2[i][j];
//   }
// }



// for(i=0; i<2; i++){
//   for(j=0; j<2; j++){
//     process.stdout.write(sum[i][j]+' ')
//   }console.log('');
// }


// ....2d array creation....................................................................

// var r = require('readline-sync');

// let array=[];

// for(let i=0; i<2; i++){
//     array[i]=[];
//     for(let j=0; j<2; j++){
//         array[i][j]=r.questionInt();
//     }
// }

// for(let i=0; i<2; i++){
//     for(let j=0 ; j<2; j++){
//         process.stdout.write(array[i][j]+' ')
//     }console.log(' ');
// }

// .....Array destructuring..................................................................


// const array=['one','two',2];
// const [first,second,third]=array;
// console.log(first);

// .....Object destructuring..................................................................

// const obj={
//   no: 1,
//   name: hari,
//   id: 33,
//   age: 23
// }
// const {no,name,id,age}=obj;
// console.log(no);

// .....Normal Object Declaration..................................................................


// let obj={name:'jk',id:2,  fun:  function() {console.log('function applied');}};
// obj.fun();


// ....Rest....................................................................................

// function sum(...jk) {


//   console.log(jk);


// }

// sum(1, 2, 3, 4)

// .......splice.................................................................

// var arr2=['first','second','third','fourth','fifth'];
// arr2.splice(1,2,'hello','hai')
// console.log(arr2);

// .......slice.................................................................

// var arr2=['first','second','third','fourth','fifth'];
// var arr=arr2.slice(2,4)
// console.log(arr);
// console.log(arr2);

// .......anonymous.................................................................

// var an=function(hi){
//     console.log('hello');
// }
// an()

// .....shift...................................................................

//  var arr=[1,2,3,4,5];
// arr.shift();
// console.log(arr);

// .....unshift...................................................................

//  var arr=[1,2,3,4,5];
// arr.unshift(0);
// console.log(arr);

// ......concat..................................................................

// let array=[1,2,3,4,5];
// let ar2=[6,7,8,9,0];
// let ar3=array.concat(ar2);
// console.log(ar3);

// ......Spread in array..................................................................

// arr=[1,2,3,4,5];

// arr2=['first','second','third','fourth','fifth'];

// arr=[...arr,...arr2];

// process.stdout.write(arr+' ');

// ....Spread in object....................................................................


// let obj={
//     id: 1,
//     name: 'jk',
//     place: 'thr'
// }

// let obj1={
//     id2:2,
//     name2:'hk',
//     place2: 'amballur'
// }

// console.log({...obj,...obj1});

// ............callback hell....................................................................

// console.log('start');

// function cb(cbb) {
//     setTimeout(() => {
//         cbb(5)
//     }, 2000);

// }

// function cb1(cbb) {
//     setTimeout(() => {
//         cbb(5)
//     }, 2000);

// }

// function cb2(cbb) {
//     setTimeout(() => {
//         cbb(5)
//     }, 2000);

// }

// function cb3(cbb) {
//     setTimeout(() => {
//         cbb(5)
//     }, 2000);

// }

// cb(function maincb(value) {
//     cb1((secValue) => {
//         cb2((thiValue) => {
//             cb3((forValue) => {

//                 console.log(forValue + thiValue + secValue + value);

//             })

//         })
//     })
// })

// console.log('end');


// ......mutiple then in promise..................................................................

// function prom1(n){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(n)
//         }, 1000);
//     })
// }
// function prom2(n){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(n)
//         }, 1000);
//     })
// }
// function prom3(n){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(n)
//         }, 1000);
//     })
// }
// prom1(5)
// .then((response)=>{
//     return prom2(response+6)
// })
// .then((response)=>{
//     return prom3(response+7)
// }).then((response)=>{
//     console.log(response);
// })
// .catch(err=>{console.log(err);})

// .................................


// function one(num){
//     return new Promise((res,rej)=>{
//             res(num)
//     })
// }
// function two(num2){
//     return new Promise((res,rej)=>{
//             res(num2+8)
//     })
// }function three(num3){
//     return new Promise((res,rej)=>{
//             res(num3+8)
//     })
// }
// one(8).then((response)=>{
//     return two(response)
// })
// .then((response)=>{
//     return three(response)
// }).then(response=>{console.log(response);})


// ............promise all,allsettled,race,any....................................................................

// const pro=new Promise((res,rej)=>{
//     rej("responsed")
// })

// const pro1=new Promise((res,rej)=>{
//     res("responsed2")
// })


// const pro2=new Promise((res,rej)=>{
//     rej("responsed3")
// })

// const promises=Promise.any([pro,pro1,pro2]);
// promises.then((response)=>{
//     console.log(response);
// }).catch(err=>{console.log(err);})


// ......async await..........................................................................

// const pro=new Promise((res,rej)=>[
//     res('resolved')
// ])

// const output=async()=>{
//     const response=await pro;
//     console.log(response);
// }
// output()

// ......callback.........................................................................


// console.log('start');
// function fun(cb){
//     setTimeout(() => {
//         cb()
//     }, 0);
// }
// fun(function(){
//     console.log('Its callback');
// })
// console.log('end');

// ......call.........................................................................

// let obj={
//     id:1,
//     name:'mass',
//     place:'kochi'
// }
// let obj2={
//     id:2,
//     name:'killadi',
//     place:'bnglr'
// }

// const fun= function(obje,hh){
//     console.log('main objects are:  ' + this.name + ' ' + this. place + ' ' + obje + ' '+ hh);
// }
// // fun.call(obj,'hi','haha')

// // fun.apply(obj,['hi','haha'])

// const func=fun.bind(obj,'hi','haha');
// console.log(func);
// func()

// ......apply,bind.........................................................................


//  const obj={
//      id:1,
//      name:'jk'
//  }
//  const obj2={
//     id:2,
//     name:'hk'
// }
//  function det(hs,haha){
//      console.log('id is : '+ this.id + ' ' + 'name is : ' + this.name +  hs + haha );
//  }
// //  det.apply(obj2,[' hello ',' hi'])
//  const bindReg=det.bind(obj,' hello ',' hi');
//  bindReg()


// ......call,apply,bind.........................................................................


// const obj1={
//     id:1,
//     name: 'haari',
//     place: 'kochi'
// }

// const obj2={
//     id:2,
//     name: 'midhun',
//     place: 'bnglr'
// }

// function f(state,country){
//     console.log("this is the object "+ this.place  + ' ' + this.name + '  ' + state + ' ' + country);
// }



// f.call(obj1,'Kerala',"India")

// f.apply(obj2,['Kerala',"India"])

// const bindM=f.bind(obj1,'Kerala',"India")
// bindM()


// ......for in loop.........................................................................

// const obj={id:1,name:'jackson',place:'kochi'}
// for(let x in obj){
//     console.log(obj[x]);
// }


// ......for of loop.........................................................................

// const arr=['hj','helkj','hak'];
// for(let x of arr){
//     console.log(x);
// }


// ......async await..........................................................................


// const pro=new Promise((res,rej)=>{
//     rej('rejected')
// })


// const output=async()=>{
//     try {
//         const response=await pro;
//         console.log(response);

//     } catch (error) {
//         console.log(error);
//     }
    
// }
// output()

// const prom=new Promise((res,rej)=>{
//     res('resolved')
// })
// async function data(){
//     const response=await prom;
//     console.log(response);
// }
// data()

// ......async await..........................................................................


// function Clown(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res("resolving the issue")
//         }, 2000);
//     })
// }

// async function msg(callback){
//     const msg=await Clown();
//     console.log("Message : ", msg);
//     callback();
// }

// msg(getresult);

// function getresult(){
//     console.log("Execute after");
// }
// console.log('first');



// Fuction currying---------------------------------------------------------------------


// function currying(x) {
//     return function (y) {
//         return function (z) {
//             return x * y * z;
//         }
//     }
// }

// let first = currying(1);
// let second = first(2);
// let third = second(3);
// console.log(third);

// ...............................................................................

// palindrome---------------------------------------------------------------------

// const palindrome=(str)=>{
//     let rev=str.split('').reverse().join('');
//     return str===rev;
// }
// console.log(palindrome("madam"));

// duplicate array---------------------------------------------------------------------

// i think it is an error. but answer we will get through this method

// let tempArr = []
// function removeDublicate(arr){
// for (let i=0; i<arr.length; i++){
//   if(tempArr.indexOf(arr[i]) < 0){
//   tempArr.push(arr[i])
//  }
// }
// console.log(tempArr);

// }

//  removeDublicate([1,2,2,1,3,4,5,4,3,4,4,7,8])
