import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

const { PORT_INFO } = process.env;
app.listen(PORT_INFO, () => {
    console.log(`Info listening at http://localhost:${PORT_INFO}`);
});