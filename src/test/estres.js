import loadtest from 'loadtest'
const options = {
    url: 'http://localhost:8080/create/nuevapelicula/Iron%20Man/2008/B/Accion/Un%20empresario%20millonario%20construye%20un%20traje%20blindado%20y%20lo%20usa%20para%20combatir%20el%20crimen%20y%20el%20terrorismo',
    maxRequests: 50,
    concurrency: 10,
    timeout: 5000
};
loadtest.loadTest(options, (error, result) => {
    if (error) {
        return console.error('Got an error: %s', error)
    }
    console.log('Tests run successfully')
    console.log(result)
});