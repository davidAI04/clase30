const Joi = require("joi");

module.exports.altaUserDTO = Joi.object().keys({
  nombres: Joi.string().alphanum().min(6).max(50),
  apellidos: Joi.string().alphanum().min(6).max(50).required(),
  email: Joi.string().email(),
  usuario: Joi.string().alphanum().min(6).max(16).required(),
  pass:  Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required()
})