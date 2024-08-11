const mongo=require("mongoose")
async function connection(url){
   return mongo.connect(url)
}

module.exports={connection}