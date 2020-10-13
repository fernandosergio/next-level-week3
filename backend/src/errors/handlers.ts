import {ErrorRequestHandler} from 'express'
import {ValidationError} from 'yup'

interface ValidationErrors{
    [key:string]:string[]
}

// Faz o tratamento de erros
const errorHandler:ErrorRequestHandler =  (error, request, response, next) => {
    if(error instanceof ValidationError){
        let errors: ValidationErrors = {}
        
        // Pega os dados com erros
        error.inner.forEach(err =>{
            errors[err.path] = err.errors
        })

        // Retorna os dados com erros
        return response.status(400).json({message:'Validation fails', errors})
    }

    // Retorna um erro interno que não seja a validação
    return response.status(500).json({ message: "Internal server error" })
}

export default errorHandler