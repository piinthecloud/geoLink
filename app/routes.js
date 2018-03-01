module.exports = function(app) {
    app.get('/api/states', function(req, res) {
        res.sendfile('./data/states.json')
    });

    app.get('/api/stateBorders', function(req, res) {
        res.sendfile('./data/stateBorders.geojson')
    });

    app.get('/*', function(req, res) {
        res.sendfile('./public/index.html');
    });
};
