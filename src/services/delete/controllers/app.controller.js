import sp from '../../../controllers/query.js';
const saludo = async (req, res) => {
    res.send('Hola mundo');
};

const delete_ = async (req, res) => {
    const { id } = req.params;
    const outcome = await sp.execute_sp('eliminarPelicula',{
        id
    });
    if(outcome.err){
        return res.status(400).json({
            status: false,
            message: 'Error al eliminar',
            result: outcome.err
        });
    }

    return res.status(200).json({
        status: true,
        message: 'Eliminado correctamente',
        result: outcome.result
    });
}

export default {
    saludo,
    delete_
};
