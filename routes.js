const routes = require('next-routes');

module.exports = routes()
    .add('/', 'index') // now you can rename 'index' to 'home', e.g.
    .add('/users', 'users')
    .add('/users/:user', 'details');