//Require app 
const app = require('./app');


//Start Server
async function startServer () {
    const server = await app.listen(app.get('port'));
    console.log('Server is listening on port', app.get('port'));
    server.on('error', err => log.error(err, `An error has occurred: ${err}`))
}

//Run server function
startServer();



