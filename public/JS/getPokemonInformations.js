var buscar = require('./findPokemonByName');

exports.Informacion_pokemon = function (req, res) {
    const pokemon = req.body.nombre;
    const pokemonInfos = buscar.BuscarXnombre(pokemon);
    if (!pokemonInfos) {

        res.send(`el pokemon ${pokemon} no fue encontrado`);
    } else {
        res.send(`<h1>${pokemonInfos.name}</h1> `);

    }
}