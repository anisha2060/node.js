// fs module:
// Synchrouns , Asynchronous (callback,promises,async await)

// fs.writeFileSync(filePath,data,optional) - write(sync)


// write(async-callback) :
// fs.writeFile(filePath,data,optional,callback)
// eg:
// fs.writeFile(filePath,"hello","utf-8",
//     (err) => console.error(err)
//     else console.log ("file created succesfully");
// )


// write(async-promises):
// fs.writeFile(filePath,data,optional).then().catch()
// eg:
// fs.promises.writeFile(filePath,"hello","utf-8").then((data)=> console.log(data)).catch ((error)=> console.error(error))


// fs.promises.writeFile(filepath,data,optional) - aync fs (async await)
const fs = require ("fs");
const path = require ("path");
const fileName= "await.txt";
const filePath = path.join(__dirname,fileName);

// const writeFileExample = async () => {
//     try{
//     await fs.promises.writeFile(filePath,"helllo wassuppp", "utf-8")
//     console.log("file created succesffully");
//     } catch (error){
//         console.log(error);
//     }
// }
// writeFileExample();

// const readFileExample = async () => {
//     try{
//     const data = await fs.promises.readFile(filePath, "utf-8")
//      console.log(data);
//     } catch (error){
//         console.log(error);
//     }
// }
//  readFileExample();


// const appendFileExample = async () => {
//     try{
//     await fs.promises.appendFile(filePath, "hiii", "utf-8" )
//      console.log("file updated");
//     } catch (error){
//         console.log(error);
//     }
// }
//  appendFileExample();


// const unlinkFile = async () => {
//     try{
//         await fs.promises.unlink(filePath)
//         console.log("file has been deleted ");
//     }catch (error){
//         console.log(error);
//     }
// }
// unlinkFile();