const express=require("express")
const app=express();
const port=8000;
const user=require("./MOCK_DATA (3).json")
const fs=require("fs")
//console.log(user)

app.use(express.urlencoded({extended:false}))

app.route("/user/:id").get((req,res)=>{
    const id=req.params.id;
    const user1=user.filter((item)=> item.id==id)
    res.json(user1[0].first_name)
}).post((req,res)=>{
let users=user;
    const body=req.body;
    const id=users.length+1;
    const newuser={id:id,...body};
    users.push(newuser)
    fs.writeFile("./MOCK_DATA (3).json",JSON.stringify(users),()=>{
        res.json(newuser)
    })

}).delete((req,res)=>{
     const id=req.params.id;
     const body=req.body;
const new_user=user.filter((item)=>item.id!=id)
console.log(new_user)
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
    console.log(new_user)
    fs.writeFile("./MOCK_DATA (3).json",JSON.stringify(new_user),()=>{
        res.json(new_user)
    })
})



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})