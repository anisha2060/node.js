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
const express = require("express");
const app = express();
const port = 5000;

// Simple GET
app.get("/info", (req, res) => {
  res.send("Server is running.");
});

// GET with Query Params
app.get("/user", (req, res) => {
  const { name, age } = req.query;

  res.send(
    `Query Received\nName: ${name}\nAge: ${age}`
  );
});

// GET with URL Params
app.get("/product/:id", (req, res) => {
  const productId = req.params.id;

  res.send(
    `Product ID Received: ${productId}`
  );
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});