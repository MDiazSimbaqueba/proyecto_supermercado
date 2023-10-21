import Joi from "joi";

export const validator = (request, response, next) => {
  const { email, password } = request.body;

  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(
      new RegExp(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/
      )
    ),
  });

  const value = schema.validate({
    email: email,
    password: password,
  });

  if (value.error) {
    response.status(500).json(value.error);
  } else {
    next();
  }
};
