const express=require("express")
const app=express()
const path=require("path")
const {connect}=require("./connection")
const route=require("./routes/route")
const uiRouter=require("./routes/staticRouter");
const url=require("./Model/model.js")
const userRouter=require("./routes/signRoute.js")
const cookieParser=require("cookie-parser")
const {restrictToLoggedInUserOnly,restrictTo}= require("./middleWare/auth")
app.use(express.urlencoded({extended:false}))
app.use(express.json())
 

//let se ejs which is embedded javascript template

app.set("view engine","ejs");
// set the path
app.set("views",path.resolve("./view"))

connect("mongodb://localhost:27017/urlShortNer").then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log(err); 
}) 

app.use(cookieParser());
app.use(restrictToLoggedInUserOnly);



app.use("/",uiRouter);
app.use("/url",restrictTo(["NORMAL","ADMIN"]),route); 
app.use("/user",userRouter)   

async function  data(){
await url.find({}) 
}
data()
const port=9000;  
 
app.listen(port ,()=>{
    console.log(`server is running on port ${port}`)
})    