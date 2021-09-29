var buscar = require('./findPokemonByName');
exports.cargar_tipos = function (req, res) {

    const pokemonInfos = buscar.tipos();
    res.render('index.html', {
        lista: pokemonInfos
    });
}

exports.Buscar_tipo = function (req, res) {
    const tipo_pokemon = req.body.t_pokemon;
    const pokemonInfos = buscar.tipos();
    res.render('Pokemonbytype.html', {
        tipo: tipo_pokemon
    });
}