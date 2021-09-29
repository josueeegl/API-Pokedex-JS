const express = require('express');
var body_parser = require('body-parser');
const path = require('path');

const app = express();

//configuraciones
let path_inicial = path.join(__dirname, '/public');
app.set('views', path.join(path_inicial, 'HTML'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(body_parser.urlencoded({
  extended: true
}));

//rutas
app.use(require('./public/routes/routes'));


//estatico
app.use(express.static(path.join(__dirname, 'public')))

//iniciar el server est
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App iniciado en ${PORT}`));