
const Joi = require('joi');

module.exports.loginDTO = Joi.object().keys({
  usuario: Joi.string().alphanum().min(6).max(16).required(),
  pass: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required()
}).with('usuario', 'pass')

