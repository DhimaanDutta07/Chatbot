const express = require('express');
const app = express();
const mongoose=require('mongoose')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const {router}=require('./routes/x')
const {xrouter}=require('./routes/work')
const {crouter}=require('./routes/xx')
const{restrictedlog}=require('./middlewares/x')
const mustacheExpress = require('mustache-express')
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');
app.use(express.urlencoded({ extended: false }));
mongoose.connect('mongodb://127.0.0.1:27017');
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/',router)
app.use('/',xrouter)
app.use('/',restrictedlog,crouter)

app.listen(8000, () => {
  console.log('server started');
});
