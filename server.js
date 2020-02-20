/**
 * Here we are creating our server of NextJs from zero
 * Here we need to code with CommonJS version
 * 
 * install plugin next-routes
 * 
 * do not forget to configure package.json:
 * "scripts": {
 *  "dev": "node server.js",
 *  "start": "NODE_ENV=production node server.js",
 *  "buid": "next build"
 * } 
 * 
 * We need to create /next.config.js
 * 
 * Stop server - if it is running
 * 
 * Delete /.next folder
 */
const { createServer } = require('http');
const next = require('next');
const routes = require('./routes');

const app = next({
    dev: process.env.NODE_ENV !== 'production'
})

const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
    createServer(handler).listen(3000)
})