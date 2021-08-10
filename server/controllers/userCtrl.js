const bcrypt = require('bcryptjs');
const UserModel = require('../models/userModel')


 const registerUser = async  (req,res)=>{
     await UserModel.findOne({email:req.body.student.email},(err,student) => {
         if (student) {
             return res.status(400).json({email:"Email already exists"});
         }
         else {
             bcrypt.genSalt(10, (err, salt)=> {
                 bcrypt.hash(req.body.student.password , salt , (err,has) => {
                     if (err) throw err;
                     req.body.student.password = hash;
                     studentModel.insertMany(req.body.student, (err)=> {
                         if(err) {
                             return res.status(400).json({success :false, error: err})
                         };
                         res.status(201).json({success:true,message: `registered of user`})
                     })
                 })
             })
         }
     })
    
}

module.exports = {registerUser}