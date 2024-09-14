//import express
const express=require ('express');
const UserRouter=require('./routers/UserRouter')
//intialise express
const app=express();
//serve ko run kre ke liye(host jaise in node .js )
const PORT=5000;
//middleware
app.use('/user',UserRouter)
app.get('/',(req,res)=>{
    res.send('response from express')
})//request ke liye /wait kr
app.get('/add',(req,res)=>{
    res.send('response from add');
});
app.get('/getall',(req,res)=>{
    res.send('response from getall')
});
app.get('/delete',(req,res)=>{
    res.send('response from delete')
});
app.get('/getbyid',(req,res)=>{
    res.send('response from getbyid')
});


//asincronus function-serve start ho jaiga call back port chale ga tb yhe chale ga 
app.listen(PORT,()=>{console.log('server started');});