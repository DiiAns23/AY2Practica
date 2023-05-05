import express from 'express';
const router = express();
import { check } from 'express-validator';
import routes from '../controllers/app.controller.js';
import validateAtributes from '../../../middlewares/validateAtributes.js';

router.get('/saludo', routes.saludo);

router.get('/nuevapelicula/:nombre/:anio/:clasificacion/:genero/:descripcion',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('anio', 'El año es obligatorio').not().isEmpty(),
    check('clasificacion', 'La clasificacion es obligatoria').not().isEmpty(),
    check('genero', 'El genero es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    validateAtributes
], routes.nuevapelicula);

export default router;