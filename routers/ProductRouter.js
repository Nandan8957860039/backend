const express=require('express')
const router=express.Router();

router.get('/add',(req,res)=>{
    res.send('Response from user add')
});

// router.get('/getall',(req,res)=>{
//     res.send('response from user delete')
// }

router.get('/getall',(req,res)=>{router.get('/getbymodel/:model', (req, res) => {
    console.log(req.params.model)
    Model.find({ model: req.params.model })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json(err);

        });
})
})

router.get('/getbyid/:id',(req,res)=>{
    model.findbyId(req.param.id)
    .then((result) => {
        res.status(200)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);

        
    });
})
router.get('/update',(req,res)=>{
    res.send('response from user update')
})



module.exports=router;
