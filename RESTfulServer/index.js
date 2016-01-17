'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 3002
});

// Add the route
server.route({
    method: 'GET',
    path: '/test',
    handler: function (request, reply) {
        let count = Math.round(Math.random() * 30);
        let results = [];
        for (let i = 0; i < count; i++) {
            results.push({ value: Math.round(Math.random() * 100) });
        }
        return reply({ data: results });
    }
});

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});