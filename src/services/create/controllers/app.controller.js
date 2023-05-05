import sp from '../../../controllers/query.js';
const saludo = async (req, res) => {
    res.send('Hola mundo');
};

const nuevapelicula = async (req, res) => {
    const { nombre, anio, clasificacion, genero, descripcion } = req.params;
    const outcome = await sp.execute_sp('insertarPelicula', { nombre, anio, clasificacion, genero, descripcion });
    if (outcome.err){
        return res.status(400).json({
            status: false,
            msg: 'Error al insertar la pelicula',
            result: outcome.err
        });
    }

    return res.status(200).json({
        status: true,
        msg: 'Pelicula insertada correctamente',
        result: outcome.result
    });

};

export default {
    saludo,
    nuevapelicula
};
