const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateData(data){
    let errors = {};
    //convert empty field to an empty string so we can use validator function
    data.firstName = isEmpty(data.firstName) ? " ":data.firstName ;

    //firstName checks
    if(Validator.isEmpty(data.firstName)){
        errors.firstName = "first Name field is required";
    }
    return{
        errors,
        isVaild:isEmpty(errors)
    }
}