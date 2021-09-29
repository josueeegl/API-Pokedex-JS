const db_pokedex = require("../../pokedex.json");

exports.BuscarXnombre = function (nombre) {
    const data = db_pokedex.find((p) => p.name.toLowerCase() === nombre.toLowerCase());
    if (!data) {
        return null;
    }
    return data;
}

exports.tipos = function () {
    let data_tipos = [];
    var j = 0;
    db_pokedex.forEach(item => {
        for (let i = 0; i < item.types.length; i++) {

            data_tipos[j] = item.types[i];
            j++;
        }
    });

    let result = data_tipos.filter((item, index) => {
        return data_tipos.indexOf(item) === index;
    })
    return result;
}