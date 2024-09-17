const express = require('express');
const router = express.Router();
//end point or route
router.get('/add',(req,res)=>{
    res.send('Response from user add');
});
router.get('/getall',(req,res)=>{
    res.send('Response from user getall');
});
router.get('/getbyid',(req,res)=>{
    res.send('Response from user getbyid');
});

module.exports=router;
 