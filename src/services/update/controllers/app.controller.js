import sp from '../../../controllers/query.js';
const saludo = async (req, res) => {
    res.send('Hola mundo');
};

const actualizar = async (req, res) => {
    const { id, nombre, anio, clasificacion, genero, descripcion } = req.params;
    const outcome = await sp.execute_sp('actualizarPelicula',{
        id,
        nombre,
        anio,
        clasificacion,
        genero,
        descripcion
    });
    if(outcome.err){
        return res.status(400).json({
            status: false,
            message: 'Error al actualizar',
            result: outcome.err
        });
    }

    return res.status(200).json({
        status: true,
        message: 'Actualizado correctamente',
        result: outcome.result
    });
}

export default {
    saludo,
    actualizar
};
