const { getUser } = require("../service/auth");

async function restrictToLoggedInUserOnly(req,res,next) {
    console.log("this authentication has been used")
    const userUid=req.cookies?.uid;
    const user=getUser(userUid)
    req.user=user 
    next();

}
async function checkAuth(req,res,next){
    const userUid=req.cookies?.uid;
    const user= getUser(userUid)
    req.user=user 
    next()
}

module.exports={
    restrictToLoggedInUserOnly,
    checkAuth
}