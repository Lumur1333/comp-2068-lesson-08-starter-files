const { create, index, update, destroy } = require('../controllers/quotes');
const routes = require('../routes');

module.exports = router => {
    router.get('/quotes', index);
    router.post('/quotes', create);
    router.post('/quotes/update', update);
    router.post('/quotes/delete', destroy);
};