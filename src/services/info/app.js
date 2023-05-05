import express from 'express';
const app = express();
import cors from 'cors';

app.use(express.json({limit: '50mb'}));
app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
));

app.get('/info/nombre', (req, res) => {
    res.status(200).json({nombre: 'Diego Andrés Obín Rosales'});
});

app.get('/info/carne', (req, res) => {
    res.status(200).json({carne: '201903865'});
});


export default app;