import express from 'express';
const router = express();
import routes from '../controllers/app.controller.js';

router.get('/saludo', routes.saludo);

router.get('/peliculas', routes.peliculas);

export default router;