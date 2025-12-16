// const express = require("express");
// const app = express();
// const port = 5000;

// // To read form data
// app.use(express.urlencoded({extended: true}));

// // POST Route
// app.post("/contact",(req, res)=>{
//     const{name, email}=req.body;
//     res.send(`Received: Name = ${name}, Email = ${email}`);
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


// const express = require("express");
// const app = express();
// const port = 5000;

// // To read JSON body (Postman raw -> JSON)
// app.use(express.json());

// // To read form data (Postman x-www-form-urlencoded)
// app.use(express.urlencoded({ extended: true }));

// // POST Route
// app.post("/contact", (req, res) => {
//   const { name, email } =req.body;
  
//   res.send({
//     message: "Data received successfully",
//     name: name,
//     email: email
//   });
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });



// GET Request with Query Params and URL Params
// const express = require("express");
// const app = express();
// const port = 5000;

// // Simple GET
// app.get("/info", (req, res) => {
//   res.send("Server is running.");
// });

// // GET with Query Params
// app.get("/user", (req, res) => {
//   const { name, age } = req.query;

//   res.send(
//     `Query Received\nName: ${name}\nAge: ${age}`
//   );
// });

// // GET with URL Params
// app.get("/product/:id", (req, res) => {
//   const productId = req.params.id;

//   res.send(
//     `Product ID Received: ${productId}`
//   );
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// Advance 


// const express=require("express");
// const app=express();

// app.get("/user/:id",(req,res)=>{
//   const userId=req.params.id;
//   res.send(`user ID is :${userId}`);
// });

// app.listen(5000,()=>{
//   console.log("server running on http://localhost:5000");
// });

//Middleware in ExpressJS
//middleware =a function that runs between request and response
//used for:logging,authentication,validation,passing,error,etc.

//Types of Middleware
//1.Application Level middleware
//2.custom middleware
//3.Routr-level & App-level Middleware
//4.Error-handling middleware

// Scope 

// function test(){
// let a=10;
// const b=20;
// }
// test();
// console.log(a);
// console.log(b);

// DOM (document object model)
// virtual DOM (replace)
 
// const express = require("express");
// const app = express();

// app.use((req,res,next)=>{
//     console.log("Middleware works!");
//     next();
// });

// app.get("/",(req, res)=>{
//     res.send("Hello From Express!")
// });

// app.listen(5000,()=>{
//     console.log("Server started at http://localhost:5000")
// });

// const express=require ("express");
// const app= express();

// function myMiddleware(req,res,next){
//     console.log("This is my custom middleware");
//     next();
// }

// app.use(myMiddleware);

// app.get("/",(res,req)=>{
//     res.send("Home Page");
// });

// app.listen(5000,()=>{
//     console.log("server started at https://localhost:5000");
// });


// Error Handling Middleware

const express=require("express");
const app= express();

app.get("/",(req,res,next)=>{
    const error=new Error("something went wrong");
    next(error);
});

app.use((err,req,res,next)=>{
    console.log("Error:", err.message);
    res.send("Error occured");
});

app.listen(5000,()=>{
    console.log("Server started http://localhost:5000");
});