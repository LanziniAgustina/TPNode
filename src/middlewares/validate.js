const Joi = require('joi')

module.exports = (schema) => {
 
    return (req, res, next) => {
        let result = schema.validate(req.body) //valida el body con el esquema
        // let result = Joi.validate(req.body, schema);
        if (result.error){
            next(result.error)
        }
        else {
            next()
        }
    }
}