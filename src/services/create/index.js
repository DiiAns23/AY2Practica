import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

const { PORT_CREATE } = process.env;
app.listen(PORT_CREATE, () => {
    console.log(`Create listening at http://localhost:${PORT_CREATE}`);
});