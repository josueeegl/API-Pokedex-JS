var buscar = require('./findPokemonByName');
exports.cargar_tipos = function(req, res){
    res.render('index.html', {
        title: 'Pokedex'
    });
}