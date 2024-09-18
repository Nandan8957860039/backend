const express=require('express')
const router=express.Router();
router.get('/add',(req,res)=>{
    res.send('Response from user add')

});
// router.get('/getall',(req,res)=>{
//     res.send('response from user delete')
// }

router.get('/getall',(req,res)=>{
    res.send('response from th user delete')
})
router.get('/getbyid',(req,res)=>{
    res.send('response from user getbyid')
})
router.get('/update',(req,res)=>{
    res.send('response from user update')
})



module.exports=router;
