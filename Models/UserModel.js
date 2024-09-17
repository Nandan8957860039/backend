const { type } = require("express/lib/response");

const{Schema,model} mongoose=required('../connection')// schema -used for the strucure for the data
const mySchema=new Schema({
    name:{ type:String,required:true},
    email:{type:String,unique:true},
    password:String,
    createdAt:{type:Date,default:Date.now}

});
module.exports=model('user',mySchema);