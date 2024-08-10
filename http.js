// let create our HTTP server by using node 
const http=require("http");
const fs=require("fs");
const url=require("url")
const myServer=http.createServer((req,res)=>{
console.log("new server has been created");
fs.appendFile("./httpRequest.txt",`${Date.now()} requestedUrl is ${req.method} ${req.url} \n`,(err,data)=>{
   // res.end("file has been created");
   if(req.url=="/favicon.ico"){
    return res.end()
   }
   const myUrl=url.parse(req.url,true);
   console.log(myUrl.query.name,myUrl.query.age)
    switch(myUrl.pathname){
        case"/":res.end("Home")
        break;
        case"/about":res.end("about")
        break
        default :res.end("something went wrong")
    }
})
// we will send a response to the client
//console.log(req.headers)
}) ;

// let's start our server by using listen method
//first we will create port no 
const port =5000;
 myServer.listen(port,()=>{
    console.log(`server is running on port ${port}`)
 })