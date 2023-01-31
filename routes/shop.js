<<<<<<< HEAD
const express=require("express");
const router=express.Router();


router.get("/chocolates",(req,res)=>{
    let chocolatesArray=[]
    shopDb.collection("chocolates").find().forEach(chocolate => {
        chocolatesArray.push(chocolate)
    }).then((result)=>res.json(chocolatesArray)).catch(err=>console.log({error:err.message}))
 })
 

router.get("/biscuits",(req,res)=>{
    let biscuitsArray=[]
    shopDb.collection("biscuits").find().forEach(biscuit => {
        biscuitsArray.push(biscuit)
    }).then((result)=>res.json(biscuitsArray)).catch(err=>console.log({error:err.message}))
})



router.get("/fruits",(req,res)=>{
    let fruitsArray=[]
    shopDb.collection("fruits").find().forEach(fruit => {
        fruitsArray.push(fruit)
    }).then((result)=>res.json(fruitsArray)).catch(err=>console.log({error:err.message}))
})

router.get("/soaps",(req,res)=>{
    let soapsArray=[]
    shopDb.collection("soaps").find().forEach(soap => {
        soapsArray.push(soap)
    }).then((result)=>res.json(soapsArray)).catch(err=>console.log({error:err.message}))
})

router.get("/pens",(req,res)=>{
    let pensArray=[]
    shopDb.collection("pens").find().forEach(pen => {
        pensArray.push(pen)
    }).then((result)=>res.json(pensArray)).catch(err=>console.log({error:err.message}))
})

module.exports=router
=======
const express=require("express");
const router=express.Router();


router.get("/chocolates",(req,res)=>{
    let chocolatesArray=[]
    shopDb.collection("chocolates").find().forEach(chocolate => {
        chocolatesArray.push(chocolate)
    }).then((result)=>res.json(chocolatesArray)).catch(err=>console.log({error:err.message}))
 })
 

router.get("/biscuits",(req,res)=>{
    let biscuitsArray=[]
    shopDb.collection("biscuits").find().forEach(biscuit => {
        biscuitsArray.push(biscuit)
    }).then((result)=>res.json(biscuitsArray)).catch(err=>console.log({error:err.message}))
})



router.get("/fruits",(req,res)=>{
    let fruitsArray=[]
    shopDb.collection("fruits").find().forEach(fruit => {
        fruitsArray.push(fruit)
    }).then((result)=>res.json(fruitsArray)).catch(err=>console.log({error:err.message}))
})

router.get("/soaps",(req,res)=>{
    let soapsArray=[]
    shopDb.collection("soaps").find().forEach(soap => {
        soapsArray.push(soap)
    }).then((result)=>res.json(soapsArray)).catch(err=>console.log({error:err.message}))
})

router.get("/pens",(req,res)=>{
    let pensArray=[]
    shopDb.collection("pens").find().forEach(pen => {
        pensArray.push(pen)
    }).then((result)=>res.json(pensArray)).catch(err=>console.log({error:err.message}))
})

module.exports=router
>>>>>>> 674f7ce0b70e3a10da00eafee56ac8fe6b795126
