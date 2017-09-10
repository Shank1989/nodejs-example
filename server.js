var express = require('express') ;
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Product = require('./api/model/product-model');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/products');

var port  = process.env.port || 4000;

app.use(express.static(__dirname + './public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var route = require('./api/routes/product-route');
route(app);


app.listen(port,function(){
    console.log("Server started on port "+ port);
})