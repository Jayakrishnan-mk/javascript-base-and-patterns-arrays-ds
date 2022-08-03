//......http Server Creation........................................................................

// const http=require('http');

// http.createServer((req,res)=>{
//     res.write('connected')
//     res.end()
// }).listen(3000)

//......Server Creation........................................................................


// const express = require('express');

// const app = express();

// app.get('/',(req,res)=>{
//     res.send("hey jk")
// })

// app.listen(3000,()=>{console.log("Server connected on PORT 3000");})



//......Routes........................................................................

// const http=require('http');
// const { join } = require('path');

// const routes={
//     '/': function index(req,res){
//         res.writeHead(200);
//         res.end("Node Routing");
//     },
//     '/aboutus': function aboutus(req,res){
//         res.end("This is about page")
//     }
// }

// http.createServer((req,res)=>{
//     if(req.url in routes){
//         return routes[req.url](req,res);
//     }
// }).listen(process.env.PORT || 8000);


//......Event Emitter........................................................................


// const events = require("events");


// const ev = new events.EventEmitter();

// ev.on("my_event", function (data){
//     console.log("Event: " , data);
// })

// ev.emit("my_event", "Call emit()")

//......Buffer........................................................................


// const buf= Buffer.alloc(5);

// buf.write("him**")


// console.log(buf.toString());

// console.log(buf[0]);
// console.log(buf[1]);
// console.log(buf[2]);

// buf[1]=111;

// console.log(buf.toString());


//......Buffer........................................................................
