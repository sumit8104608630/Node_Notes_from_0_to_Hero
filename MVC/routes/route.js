const express=require("express");
const router=express.Router();
const {handelRequest,handelPost, handelPatch, handelDelete}=require("../controller/contrl.js")
const user=require("../Model/model")
router.use(express.urlencoded({extends:false}));
router.get("/",handelRequest).post("/add",handelPost).patch("/:id",handelPatch).delete("/:id",handelDelete)
//router.listen(8000,()=>{console.log("server has started at "+8000)})
module.exports=router;