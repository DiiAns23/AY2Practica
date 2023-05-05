import conexion from './conexion.js';

const execute_sp = async function execute_sp(proc_name, params) {
    try {
        const formated_params = Object.values(params).join(`', '`)
        if (formated_params == '') {
            const proc = `CALL ${proc_name}();`
            const [result] = await conexion.promise().execute(proc);
            return {proc, result};
        }
        const proc = `CALL ${proc_name}('${formated_params}');`
        const [result] = await conexion.promise().execute(proc);
        return {proc, result};
    } catch (err) {
        return {err}
    }
};


export default {
    execute_sp
};

