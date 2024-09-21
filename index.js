//import express
const express = require('express');
const UserRouter = require('./routers/UserRouter')
const ProductRouter = require('./routers/ProductRouter')
//const ProductRouter=require('./routers/ProductRouter')
//intialise express
// const app = express();
const app=express();
//serve ko run kre ke liye(host jaise in node .js )
// const PORT = 5000;
const PORT=5000;
//middleware
app.use(express.json());
app.use('/user', UserRouter);
// app.use('/product', ProductRouter);
app.use('/product',ProductRouter);

app.get('/', (req, res) => {
    res.send('response from express')
})//request ke liye /wait kr
app.get('/add', (req, res) => {
    res.send('response from add');
});
app.get('/getall', (req, res) => {
    res.send('response from getall')
});
app.get('/delete', (req, res) => {
    res.send('response from delete')
});
app.get('/getbyid', (req, res) => {
    res.send('response from getbyid')
});


//asincronus function-serve start ho jaiga call back port chale ga tb yhe chale ga 
app.listen(PORT, () => { console.log('server started'); });


//response status codes
//1.100-199: information response code
//2.200-299: success status code
//3.300-399: Redirect status code
//4.400-499: client side server
//5.4