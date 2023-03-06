const path = require('path')
const express = require('express')
const morgan = require('morgan')
const hbs = require('express-handlebars')
const methodOverride = require('method-override')
const app = express()
const port = 3000

const route = require('./routes/index')
const db = require('./config/db')


//Connect database:
db.connect();

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(methodOverride('_method'))

//HTTP Logger
//app.use(morgan('combined'))

app.engine('hbs', hbs.engine({
  extname: '.hbs',
  helpers:{
    sum: (a,b) => a+b,
  }
}));

app.set('view engine', 'hbs');
app.set('views', './src/resources/views')

route(app);

app.listen(port);