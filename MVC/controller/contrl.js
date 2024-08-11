const user=require("../Model/model")

async function handelRequest(req,res){
    const users=await user.find({});
  const html=  users.map((item)=>{
      return ` <li>${item.email}</li>`
    }).join("")
res.send(html)}

async function handelPost(req,res){
    const result=await user.create({
        firstName:req.body.first_name,
        lastName:req.body.last_name,
        email:req.body.email,
        car:req.body.car
    })
    console.log(result)
result?res.status(202).end("created  user  in the mongoDB"):res.status(500).end("something went wrong please check the server")
}

async function handelPatch(req,res){

    await user.findByIdAndUpdate(req.params.id,{firstName:"sumit"}).then(()=>{
        res.status(201).end("user is updated")
    })
    }
    async function handelDelete(req,res){
        const id=req.params.id;
        await user.findOneAndDelete(id)
        res.status(200).end("user deleted")
       }
module.exports={
    handelRequest,
    handelPost,
    handelPatch,
    handelDelete
}