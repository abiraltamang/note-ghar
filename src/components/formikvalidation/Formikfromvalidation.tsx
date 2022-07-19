import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// Signup form validataion
export const Signup_formValidation = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password is Short!")
    .max(50, "Password too long!")
    .required("Password is Required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  username: Yup.string().required("Username is required!"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Password must match")
    .required("Required"),
  phone: Yup.string()
    .required("Phone number required!")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "to short")
    .max(20, "to long"),
  role: Yup.string().required("Must select one option!"),
});

//login form validation
export const Signin_formValidation = Yup.object().shape({
  password: Yup.string()
    .min(2, "Password is Short!")
    .max(50, "Password too long!")
    .required("Password is Required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});
