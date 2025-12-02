// What is Express.js?

// A minimal and flexible Node.js framework used to build web servers and APIs.
// It simplifies takes like routing, handaling requests, sending responses, and managing middleware.

// Key Points



// creating a basic express server

// const express = require("express");
// require("dotenv").config();

// const app = express();

// app.get("/",(req,res) => {
//     res.send("Hello from Express!");
// });

// app.listen(process.env.PORT || 3000, () =>{
//     console.log("Server running...");
// });


// Basic Routing in Express.js
// const express = require("express");
// const app=express();
// const PORT=3000;

// app.get("/about",(req,res)=>{
//     res.send("Hello from about page");
// });

// app.post("/contact",(req, res)=>{
//     res.send("contact form submitted");
// });
// app.listen(PORT, ()=>{
//     console.log(`server running on https://localhost:${PORT}`);
// });


const express = require("express");
const app = express();

app.use(express.json()); // Body parser

// GET
app.get("/hello", (req, res) => {
  res.send("This is GET Route");
});

// POST
app.post("/login", (req, res) => {
  res.send(req.body);
});

// Query
app.get("/search", (req, res) => {
  res.send(req.query);
});

// Params
app.get("/user/:id", (req, res) => {
  res.send(req.params);
});

// Middleware
app.use((req, res, next) => {
  console.log("Middleware working...");
  next();
});

// JSON API
app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Keyboard" },
  ]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});