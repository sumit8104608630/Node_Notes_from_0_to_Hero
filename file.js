const fs=require("fs")
//let create the text file using the node first argument will be the file name with path and second will be the data
fs.writeFileSync("./txt.txt",Date.now().toString()+"\n",(err)=>{
err?console.log(err):console.log("file created")
})


// let perform append operation by same approach 

fs.appendFileSync("./txt.txt","sumit");

//let read the file using the fs 
const data=fs.readFileSync("./txt.txt","utf-8")
console.log(data)

//let se same approach by using the async it is blocking 

fs.readFile("./txt.txt","utf16le",(res,rej)=>{
    res?console.log(res):console.log(rej)
})

console.log(fs.statSync("./txt.txt"))

const cpu=require("os");
console.log(cpu.hostname()); 