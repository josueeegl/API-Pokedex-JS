var buscar = require('./findPokemonByName');

exports.Buscar_exp = function (req, res) {
    const min = req.body.min_base;
    const max = req.body.max_base;
    const data = buscar.buscar_base(min, max);
    res.render('pokemon_exp.html', {
        arreglo: data
    });
}