// Importar mysql para la conexion con la base de datos de tipo import
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
const {
    DB_HOST, 
    DB_PORT, 
    DB_USER, 
    DB_PASSWORD, 
    DB_NAME
} = process.env;

const conexion = mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
});

conexion.connect((error) => {
    if(error){
        console.log('Error en la conexion con la base de datos');
    }else{
        console.log('Conexion exitosa con la base de datos');
    }
});


export default conexion;