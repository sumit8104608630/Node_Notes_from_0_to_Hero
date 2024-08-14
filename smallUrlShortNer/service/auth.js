const jwt=require("jsonwebtoken")
const secret="sumit8104608630@"
function setUser(user){
    const payload={
        _id:user._id, 
        email:user.email,
    }
  return  jwt.sign(payload,secret);
} 

function getUser(token){
    if(!token){
        return null 
    }
    console.log(token)
    return jwt.verify(token,secret)
}

module.exports={
    setUser,
    getUser
} 