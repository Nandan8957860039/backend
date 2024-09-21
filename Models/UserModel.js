// // const { Schema, model } = require('../connection')

// // // schema -used for the strucure for the data

// // const mySchema = new Schema({
// //     name: { type: String, required: true },
// //     email: { type: String, unique: true },
// //     password: String,
// //     createdAt: { type: Date, default: Date.now }

// // });
// // module.exports = model('user', mySchema);



// // //four database-create-new database add krna ,read-data read krna ,update,delete
// // //REQUEST METHOD-get,post,put,delete
// // // get-to read the data
// // // post-to add the data
// // // put-to update the data
// // //delete-to delete the data

// const{Schema,model}=require('../connection')

// const mySchema=new Schema({
//     name:{type:String,required:true},
//     email:{type:String,unique:true},
//     password:String,
//     createAt:{type:Date,default:Date.now}
// });
const { Schema, model } = require('../connection')//model is liye banate hai data store keya jaa sakte

const mySchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    password: String,
    city:{type:String,default:'unknown'},
    createAt: { type: Date, Default: Date.now }//
})

module.exports = model('user', mySchema);//rest API-representaion API yhe ek backend
//  hota hai formely connect with fronend to backend