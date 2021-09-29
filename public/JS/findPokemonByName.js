const db_pokedex = require("../../pokedex.json");

exports.BuscarXnombre = function (nombre) {
    const data = db_pokedex.find((p) => p.name.toLowerCase() === nombre.toLowerCase());
    if (!data) {
        return null;
    }
    return data;
}