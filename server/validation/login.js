const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateData(data){
    let errors = {};

    //Convert empty field to an empty string so we can use validator function
    data.firstName = !isEmpty (data.firstName) ? data.firstName : " ";
    
}