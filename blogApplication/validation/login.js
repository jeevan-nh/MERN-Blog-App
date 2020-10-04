const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = validationLogininput = data => {
    let errors = {}

    let {email,password} = data;
    
    email = !isEmpty(email)? email: '';
    password = !isEmpty(password)? password: '';

    if (Validator.isEmpty(email)) {
        errors.email = "Email cannot be empty";
    } else if (!Validator.isEmail(email)){
        errors.email = "Invalid Email";
    }

    if (Validator.isEmpty(password)) {
        errors.password = "Password cannot be empty";
    } else if (!Validator.isLength(password,{min: 6, max:30})){
        errors.password = "Invalid Password - password length must be between 6 and 30"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
