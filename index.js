/* requerimiento del contenedor ".env", donde
guardamos informacion privada del proyecto al
subirlo a una repositorio como github de manera
publica, luego podemos usar el .gitignore
para pasar por alto la publicacion de este
contenedor ".env" */
require('dotenv').config();

/* llamado de express, es un framework de node.js
sirve para crear la interfaz de programacion
de apricaciones */
const express = require("express");
const app = express();

//ayuda a utilizar otro metodo en las vistas
//como el PUT en este caso
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//llamado de los layouts
const layouts = require('express-ejs-layouts')

/* path: se utiliza para combinar segmentos de ruta en una 
sola ruta completa. Esta función es útil para construir
rutas de archivos o directorios de manera que sean 
portátiles y funcionen correctamente en diferentes 
sistemas operativos */
const path = require('path');

/* express.urlencoded() es un middleware de Express.js 
que se usa para analizar datos codificados en URL, 
como los que se envían en formularios HTML con el 
método POST. Permite que los datos del formulario 
se conviertan en un objeto JavaScript accesible desde 
req.body.
 */
app.use(express.urlencoded({extended: false}));

//el __dirname regresa una direccion absoluta.
app.use(express.static(path.join(__dirname,"public")));

//seleccionamos el motor de vistas .ejs
app.set('view engine','ejs')
app.set('views',path.join(__dirname,"src/views"))

//funcion para usar modulos en el html y evitar repeticiones de codigo.
app.use(layouts)
app.set('layout', 'layouts/layout')

/* dos maneras distintas de escribir las rutas */
//1        se escribe mas codigo
const mainRouter = require('./src/routes/main.router');
app.use(mainRouter);
//2        se escribe menos codigo
app.use('/categorias', require('./src/routes/categorias.router'));
app.use('/materias', require('./src/routes/materias.router'));
app.use('/contacto', require('./src/routes/contacto.router'));

/* se define el puerto por donde escucha la app,
el puerto en el archivo .env y en caso de no funcinar
se usa el definido abajo */
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));