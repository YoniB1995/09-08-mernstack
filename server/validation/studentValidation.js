const Validator = require('validator');
const isEmpty = require('is-empty');


module.exports = function validateStudentData(data){
    let errors = {};
    //convert empty field to an empty string so we can use validator function
    data.firstName = isEmpty(data.firstName) ? " ":data.firstName ;
    data.lastName = isEmpty(data.lastName) ? " ":data.lastName ;
    data.age = isEmpty(data.age) ? 0:data.age ;
    data.email = isEmpty(data.email) ? " ":data.email ;

    //firstName checks
    if(Validator.isEmpty(data.firstName)){
        errors.firstName = "first Name field is required";
    }
    if(Validator.isEmpty(data.lastName)){
        errors.firstName = "last Name field is required";
    }
    if(Validator.isEmpty(data.age)){
        errors.firstName = "age field is required";
    }
    if(Validator.isEmail(data.email)){
        errors.firstName = "email field is required";
    }
   
  
    return{
        errors,
        isVaild:isEmpty(errors)
    }
}