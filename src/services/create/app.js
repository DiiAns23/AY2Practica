import express from 'express';
const app = express();
import cors from 'cors';

import routes from './routes/app.route.js';

app.use(express.json({limit: '50mb'}));
app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
));

app.use(`/create`, routes);

export default app;
