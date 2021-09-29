var buscar = require('./findPokemonByName');

exports.Informacion_pokemon = function (req, res) {
    const pokemon = req.body.nombre;
    const pokemonInfos = buscar.BuscarXnombre(pokemon);
    if (!pokemonInfos) {

        res.send(`el pokemon ${pokemon} no fue encontrado`);
    } else {
        res.render('Pokemons.html', {
            Nombre: pokemonInfos.name,
            image: pokemonInfos.image
        });

    }
}