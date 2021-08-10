const bcrypt = require('bcryptjs');
const UserModel = require('../models/userModel')


 const registerUser = async  (req,res)=>{
     await UserModel.findOne({email:req.body.user.email},(err,student) => {
         if (student) {
             return res.status(400).json({email:"Email already exists"});
         }
         else {
             bcrypt.genSalt(10, (err, salt)=> {
                 bcrypt.hash(req.body.user.password , salt , (err,has) => {
                     if (err) throw err;
                     req.body.user.password = hash;
                     studentModel.insertMany(req.body.user, (err)=> {
                         if(err) {
                             return res.status(400).json({success :false, error: err})
                         };
                         res.status(201).json({success:true,message: `registered of ${req.body.user.email}`})
                     })
                 })
             })
         }
     })
    
}

module.exports = {registerUser}