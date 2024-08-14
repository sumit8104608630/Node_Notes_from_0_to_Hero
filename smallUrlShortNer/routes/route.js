const express=require("express");
const { handelPost, handelGet } = require("../controller/control");
const router=express.Router();

router.get("/:url",handelGet)
.post("/",handelPost)


module.exports=router
  