const { getUser } = require("../service/auth");

async function restrictToLoggedInUserOnly(req,res,next) {
    console.log("this authentication has been used")
    const userUid=req.cookies?.uid;
    if(!userUid)return null
    const user=getUser(userUid)
    req.user=user 
   return next();

}

function restrictTo(role=[]){
return function checkAuth(req,res,next){
    console.log("it also check auth")
   // const userUid=req.cookies?.uid;
    if(!req.user)return res.redirect("/login")
    if(!role.includes(req.user.role)) return res.end("unAuthorized");

    req.user=user 
  return  next()
}
}
module.exports={
    restrictToLoggedInUserOnly,
   // checkAuth
   restrictTo 
}