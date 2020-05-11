// Imports
import express from 'express';
import exphbs from 'express-handlebars';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access'
import  handlebars  from 'handlebars'
import path from 'path'
import { helpers } from './helpers/helpers';

// Importing routes
import index_router from './routes/index_routes';
import books_router from './routes/books_routes';

// Importing database
import './database';

// Initializations
const app = express();

// Settings
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));

// const hbs = exphbs.create({
//     handlebars: allowInsecurePrototypeAccess(Handlebars),
//     extname: '.hbs',
//     defaultLayout: 'main',
//     layoutsDir: path.join(app.get('views'), 'layouts'),
//     partialsDir: path.join(app.get('views'), 'partials'),
//     helpers: helpers.hbsHelpers()
// })

app.engine('.hbs', exphbs({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: helpers.hbsHelpers()
}));

app.set('view engine', '.hbs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', index_router);
app.use('/books', books_router);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(port, () => {
    console.log(`Server en puerto ${port}`);
});