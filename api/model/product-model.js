'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name:{
        type:String,
        required :"product name is required."
    },
    status:{
        type:[{
            type:String,
            enum:['prending','inprocess','done']
            }],
            default:['inprocess']
    },
    price:{
        type:Number
    },
    date:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('Product',ProductSchema);