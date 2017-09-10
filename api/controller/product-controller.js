'use strict';

var mongoose = require('mongoose');
var Product = mongoose.model('Product');

exports.get_allproducts = function(req,res){
    Product.find({},function(err,data){
        if(err){
            res.send(err);
        }
        res.json(data);
    });
}

exports.add_product = function(req,res){
    var new_prod = new Product(req.body);

    new_prod.save(function(err,data){
        if(err)
            res.send(err);
        res.json(data);
    });
}