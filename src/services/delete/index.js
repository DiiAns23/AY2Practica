import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

const { PORT_DELETE } = process.env;
app.listen(PORT_DELETE, () => {
    console.log(`Delete listening at http://localhost:${PORT_DELETE}`);
});