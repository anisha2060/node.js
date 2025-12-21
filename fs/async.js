const fs = require ("fs");
const path = require("path");

const fileName = "crud.txt";

const filePath = path.join(__dirname, fileName);
console.log(filePath);

fs.unlink(filePath, 
    (err)=>{
        if (err) console.error(err);
        else console.log("Delete file");
});
// fs.appendFile(filePath, "Hello prashansha", "utf-8",
//     (err)=>{
//         if (err) console.error(err);
//         else console.log("File save");
// });
// fs.readFile(filePath, "utf-8",
//     (err, data)=>{
//         if (err) console.error(err);
//         else console.log(data);
// });
// fs.writeFile(filePath, "hiii samikshya", "utf-8",
//     (err)=>{
//         if (err) console.error(err);
//         else console.log("file has been saved");
// });