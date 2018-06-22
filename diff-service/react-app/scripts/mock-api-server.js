const jsonServer = require('json-server');
const data = require('../mock-api.js');
const server = jsonServer.create();
const router = jsonServer.router(data());
const middlewares = jsonServer.defaults({readOnly: true});

module.exports = MockApiServer = () => {
    server.get('/entries/*', (req, res, next) => {
        req.url= '/entries?entryId='+req.params[0];
        req.originalUrl= '/entries?entryId='+req.params[0];
        req._parsedUrl.pathname= '/entries?entryId='+req.params[0];
        req._parsedUrl.path= '/entries?entryId='+req.params[0];
        req._parsedUrl.href= '/entries?entryId='+req.params[0];
        req._parsedUrl.raw= '/entries?entryId='+req.params[0];
        req.query = {entryId: req.params[0]};
        req.params[0] = '';

        next()
    });

    server.use(middlewares);
    server.use(router);
    server.listen(3001, () => {
        console.log('JSON Server is running')
    });
};