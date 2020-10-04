const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = validationSignupInput = data => {
    let errors = {}

    let {user_name,email,password} = data;

    user_name = !isEmpty(user_name)? user_name: '';
    email = !isEmpty(email)? email: '';
    password = !isEmpty(password)? password: '';

    if(Validator.isEmpty(user_name)){
        errors.user_name =  "Username connot be empty"
    }

    if (Validator.isEmpty(email)) {
        errors.email = "email cannot be empty"
    } else if (!Validator.isEmail(email)) {
        errors.email = "Invalid emailid"
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
}