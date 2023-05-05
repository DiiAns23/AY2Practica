import express from 'express';
const router = express();
import routes from '../controllers/app.controller.js';

router.get('/saludo', routes.saludo);

router.get('/actualizar/:id/:nombre/:anio/:clasificacion/:genero/:descripcion', routes.actualizar);

export default router;