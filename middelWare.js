//middleWare is just a normal function
//it can be used to perform some operations before the request is passed to the next middleware
//you can say that it secure the path between the request and response
//let s make new middleWare


//let first create server:

const express=require("express")
const app=express();
const port=8000;
const user=require("./MOCK_DATA (3).json")
const fs=require("fs")
//console.log(user)

app.use(express.urlencoded({extended:false}))

// let create the first middleWare

app.use((req,res,next)=>{
    console.log("first middleWare")
    next()
})

// next is for moving forward to next middleWare or you can say next post

app.route("/user/:id").get((req,res)=>{
    const id=req.params.id;
    const user1=user.filter((item)=> item.id==id)
    res.json(user1[0].first_name)
}).post((req,res)=>{
let users=user;
    const body=req.body;
    if(!body||!body.first_name||!body.last_name){
        res.status(404).json({"error":"invalid request"})
    }
    const id=users.length+1;
    const newuser={id:id,...body};
    users.push(newuser)
    fs.writeFile("./MOCK_DATA (3).json",JSON.stringify(users),()=>{
        
        res.status("202").json(newuser)
    })

}).delete((req,res)=>{
     const id=req.params.id;
    // const body=req.body;
const new_user=user.filter((item)=>item.id!=id)
//console.log(new_user)
fs.writeFile("./MOCK_DATA (3).json",JSON.stringify(new_user),()=>{
    res.json(new_user)
})
}).patch((req,res)=>{
    const id=req.params.id;
    const body=req.body;
    const new_user=user.map((item)=>{
        if(item.id==id){
            return{...item,...body}
        }
       return item
    })
 //   console.log(new_user)
    fs.writeFile("./MOCK_DATA (3).json",JSON.stringify(new_user),()=>{
        res.json(new_user)
    })
})

// alway build your own header  it is good practice


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})