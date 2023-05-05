import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

const { PORT_UPDATE } = process.env;
app.listen(PORT_UPDATE, () => {
    console.log(`Update listening at http://localhost:${PORT_UPDATE}`);
});