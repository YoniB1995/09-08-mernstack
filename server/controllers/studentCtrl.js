const studentModel = require('../models/studentModel')
const studentValidation =require('../validation/studentValidation')


const getAllStudents = async (req,res) => {
   const {errors,isValid} = studentValidation(req.body.student);
   if(!isValid) {
       return res.status(400).json(errors);
   }
    try{
     await studentModel.find({},(err,result)=>{
        if (err) console.log(err);
        res.json({message:"Success",data:result})
    })
}catch(error){
        res.json({message:"database problem",error:error})

    }
}

const getStudentById = async (req,res) => {
    try{
    await studentModel.findById(req.params.id,(err,result)=>{
        if (err) console.log(err);
        res.json({message:"Success",data:result})
    })
}catch(error){
        res.json({message:"database problem",error:error})

    }
}

//good
const createNewStudent = async (req,res) => {
    // const {firstName,lastName,age,email} = req.body
    try{
     await studentModel.insertMany(
    req.body.student
    ,(err,result)=>{
        if (err) console.log(err);
        res.json({message:"Success",data:req.body.student})
    })

}catch(error){
        res.json({message:"database problem",error:error})

    }
}


const deleteStudent = async (req,res) => {
    try{
    await studentModel.findByIdAndDelete(
    req.params.id,(err,result)=>{
        if (err) console.log(err);
        res.json({message:"Success",data:result})
        
    })
}catch(error){
        res.json({message:"database problem",error:error})

    }
}

const updateStudent = async (req,res) => {
    try{
    await studentModel.findByIdAndUpdate(
    req.params.id,req.body.student,(err,result)=>{
        if (err) console.log(err);
        res.json({message:"Success",data:req.body.student})
    })
}catch(error){
        res.json({message:"database problem",error:error})
    }
}


module.exports = {getAllStudents,createNewStudent,getStudentById,deleteStudent,updateStudent}