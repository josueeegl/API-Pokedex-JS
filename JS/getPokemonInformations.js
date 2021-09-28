var buscar = require('./findPokemonByName');

exports.Informacion_pokemon = function (req, res) {
    const pokemon = req.body.conversation.memory.pokemon;
    const pokemonInfos = buscar.BuscarXnombre(pokemon.value);
    if (!pokemonInfos) {
        res.json({
            replies: [{
                type: "text",
                content: `no conozco el pokemon llamado ${pokemon} :(`,
            }, ],
        });
    } else {
        res.json({
            replies: [{
                    type: "text",
                    content: `*${pokemonInfos.name}*`
                },
                {
                    type: "text",
                    content: `Tipos: ${pokemonInfos.types.join(" and ")}`,
                },
                {
                    type: "text",
                    content: `Altura: ${pokemonInfos.height}`,
                },
                {
                    type: "text",
                    content: `Peso: ${pokemonInfos.weight}`,
                },
                {
                    type: "text",
                    content: `Experiencia base: ${pokemonInfos.base_experience}`,
                },
                {
                    type: "text",
                    content: pokemonInfos.description
                },
                {
                    type: "picture",
                    content: pokemonInfos.image
                },
            ],
        });
    }
}