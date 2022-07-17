const express=require('express');
const router=express.Router();
//const {Posts}=require('../models');
const UNIFY = require('../UnifyAPI/unifyUMP_api')
const Formatter = require("../UnifyAPI/unify_xmlformatter");
const { response } = require('express');
//router.get("/", async (req,res)=>{
    router.post("/", async (req,res)=>{
//const listOfPosts=await Posts.findAll();
//    res.send("hello world");
//res.json("hello world");
const canid=req.body.canId;
    
//var canid='9079003'; 
    
            const call_api=async function(){
            var result;
        await UNIFY.getCustomerAccountDetail(canid).then((response)=>{
        //console.log(response);
         result=response; 
         //res.json("hello world");
         //res.json(result);  
            })
        .catch((error)=>{
   
        console.log(error)
   
        });
    
//console.log(result);
        return result;
       }

call_api(canid).then((result1)=> {
   
    //console.log(result1)
    //x=JSON.parse(result1);
    //console.log(x.accountId);
    res.json(result1);
  }).catch(console.error.bind(console))

//res.json(xml);
});

//router.post()
// router.post("/", async (req,res)=>{
//     const post=req.body
//     await Posts.create(post);
// res.json(post);
//     //    res.send("hello world");
// });

module.exports=router;