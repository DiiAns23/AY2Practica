// En este archivo se crea un middleware para validar los campos de los formularios
import { validationResult } from 'express-validator';

const validateAtributes = (req,res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors});
    }
    next();
};

export default validateAtributes;