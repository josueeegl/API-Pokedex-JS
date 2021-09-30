const express = require('express');
const router = express.Router();
var info_pokemon = require('../JS/getPokemonInformations');
var evolucion = require('../JS/getPokemonEvolutions.js');
var tipos = require('../JS/tipos_pokemon');
var exp = require('../JS/pokemon_exp.js');
var maxmenor = require('../JS/MaxMin.js');

router.get('/', tipos.cargar_tipos);

router.post('/pokemon-informations', info_pokemon.Informacion_pokemon);
router.post('/tipos_pokemon', tipos.Buscar_tipo);
router.post('/base_experience', exp.Buscar_exp);
router.post('/menormayor', maxmenor.mayormenor);
router.post('/pokemon-evolutions', evolucion.Evolucion_pokemon);
router.post('/errors', function (requ, res) {
    console.error(requ.body, res);
    res.sendStatus(200);
});

module.exports = router;