import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

const { PORT_READ } = process.env;
app.listen(PORT_READ, () => {
    console.log(`Read listening at http://localhost:${PORT_READ}`);
});