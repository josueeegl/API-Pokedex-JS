var buscar = require('./findPokemonByName');
exports.mayormenor = function (req, res) {

    const pokemonInfos = buscar.MaxMin();
    res.render('MaxMin.html', {
        arreglo: pokemonInfos
    });
}