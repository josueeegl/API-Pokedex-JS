const express = require('express');
const router = express.Router();
var info_pokemon = require('../JS/getPokemonInformations');
var evolucion = require('../JS/getPokemonEvolutions.js');

router.get('/', (req, res) => {
    res.render('index.html', {
        title: 'Pokedex'
    });
})

router.post('/pokemon-informations', info_pokemon.Informacion_pokemon);
router.post('/pokemon-evolutions', evolucion.Evolucion_pokemon);
router.post('/errors', function (requ, res) {
  console.error(requ.body, res);
  res.sendStatus(200);
});

module.exports = router;