const express = require('express');
const router = express.Router();
const Model=require("../models/UserModel");
//end point or route
router.post('/add',(req,res)=>{
    console.log(req.body);
    res.send('Response from user add');
});
router.get('/getall',(req,res)=>{
    res.send('Response from user getall');
});
router.get('/getbyid',(req,res)=>{
    res.send('Response from user getbyid');
});

module.exports=router;
 