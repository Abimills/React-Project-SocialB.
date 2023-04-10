const validationSchema = (err) => {
  //console.log(err);
  let errors = {};

  // duplicate email error
  if (err.code === 11000) {
    errors.message = "email already exists, try again with new email";
    return errors;
  }

  // validation errors
  if (err.message.includes("validation failed")) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

export default validationSchema;
