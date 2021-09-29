var buscar = require('./findPokemonByName');
var mostrar = require('./main');

exports.Informacion_pokemon = function (req, res) {
    const pokemon = req.body.nombre;
    const pokemonInfos = buscar.BuscarXnombre(pokemon);
    if (!pokemonInfos) {
        
        res.send(`el pokemon ${pokemon} no fue encontrado`);
    } else {
        res.send(`${mostrar.inicio_pokemon}<h1>${pokemonInfos.name}</h1> ${mostrar.fin_pokemon}`);

    }
}