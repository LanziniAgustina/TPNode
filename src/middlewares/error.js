const errorMsg = require('../const/errorMsg')
module.exports = function(err, req, res, next) {
    let response = {
        success: false,
        error: {
            code: err.code || 500,
            message: err.message || 'Internal server error'
        }
    }

    if (err.isJoi){ //si es error de validacion con el schema
        let validationErrorType = err.details[0].type
        let errorKey = 'ValidationError'
        
        if (validationErrorType === 'any.required'){
            errorKey = "FaltanCampos"
        }
        response.error.code = errorMsg[errorKey].code
        response.error.message = errorMsg[errorKey].message
    }
    
    if (err.message == 'Not Found'){
        response.error.code = errorMsg[err.message].code
        response.error.message = errorMsg[err.message].message
    }

    res.status(200).json(response)
}