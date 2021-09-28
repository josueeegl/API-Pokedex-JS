var buscar = require('./findPokemonByName');

exports.Evolucion_pokemon = function (req, res) {
    const pokemon = req.body.conversation.memory.pokemon;
    const pokemonInfos = buscar.BuscarXnombre(pokemon.value);
    if (!pokemonInfos) {
        res.json({
            replies: [{
                type: "text",
                content: `no conozco el pokemon llamado ${pokemon} :(`,
            }, ],
        });
    } else if (pokemonInfos.evolutions.length === 1) {
        res.json({
            replies: [{
                type: "text",
                content: `${pokemonInfos.name} has no evolutions.`
            }, ],
        });
    } else {
        res.json({
            replies: [{
                    type: "text",
                    content: `${pokemonInfos.name} family`
                },
                {
                    type: "text",
                    content: pokemonInfos.evolutions

                },
                {
                    type: "card",
                    content: {
                        title: "Ver mas de este",
                        buttons: pokemonInfos.evolutions
                            .filter((p) => p.id !== pokemonInfos.id) // Remove initial pokemon from list
                            .map((p) => ({
                                type: "postback",
                                title: p.name,
                                value: `Dime mas de ${p.name}`,
                            })),
                    },
                },
            ],
        });
    }
}