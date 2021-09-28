const express = require('express');
var body_parser = require('body-parser');
const path = require('path');
var info_pokemon = require('./JS/getPokemonInformations.js');
var evolucion = require('./JS/getPokemonEvolutions.js');

const app = express();

//Aqui llamaremos al html
let path_inicial = path.join(__dirname, 'index.html');
app.use(express.static(path_inicial));
app.get('/', (req, res) => {
  res.sendFile(path_inicial)
})

//ponemos body parser para acceder a los datos enviados desde el formulario
app.use(body_parser.urlencoded({
  extended: true
}));



//construye las rutas de servicio
app.post('/pokemon-informations', info_pokemon.Informacion_pokemon);
app.post('/pokemon-evolutions', evolucion.Evolucion_pokemon);
app.post('/errors', function (requ, res) {
  console.error(requ.body, res);
  res.sendStatus(200);
});

//iniciar el server est
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App iniciado en ${PORT}`));