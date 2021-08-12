const Validator = require("validator");
const isEmpty = require("is-empty");

/**
 * 
 * @param {{}} user 
 * @returns 
 */
module.exports = function validateUserData(user, isLogin) {
  let errors = {};

  // Convert empty field to an empty string so we can use validator functions
  user.email = isEmpty(user.email) ? "" : user.email;
  user.password = isEmpty(user.password) ? "" : user.password;
  console.log(Validator.isEmpty(user.email));

  // email check
  if (Validator.isEmpty(user.email)) {
    errors.email = "email field is required";
  }
  // isEmail? check
  // else if (Validator.isEmail(user.email)) {
  //   errors.email = "valid email field is required";
  // }
  // password checks
  if (Validator.isEmpty(user.password)) {
    errors.password = "password field is required";
  }
  //Will execute only in case of register
  if (!isLogin) {
    user.firstName = isEmpty(user.firstName) ? "" : user.firstName;
    user.lastName = isEmpty(user.firstName) ? "" : user.lastName;
    // firstName check
    if (Validator.isEmpty(user.firstName)) {
      errors.firstName = "first Name field is required";
    }
    // lastName check
    if (Validator.isEmpty(user.lastName)) {
      errors.lastName = "last Name field is required";
    }
    // password Length check
    if (!Validator.isLength(user.password, { min: 6, max: 30 })) {
      errors.password = "Password must be at least 6 characters";
    }
    // password and passwordConfirmation equals check
    if (!Validator.equals(user.password, user.password2)) {
      errors.password2 = "Passwords must match";
    }
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};