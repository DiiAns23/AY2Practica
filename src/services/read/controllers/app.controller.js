import sp from '../../../controllers/query.js';
const saludo = async (req, res) => {
    res.send('Hola mundo');
};

const peliculas = async (req, res) => {
    const outcome = await sp.execute_sp('obtenerPelicula', '');
    if (outcome.err){
        return res.status(400).json({
            status: false,
            msg: 'Error al obtener las peliculas',
            result: outcome.err
        });
    }
    return res.status(200).json({
        status: true,
        msg: 'Peliculas obtenidas correctamente',
        result: outcome.result
    });
};


export default {
    saludo,
    peliculas
};
