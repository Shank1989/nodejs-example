'use strict';

module.exports = function(app){

    var ctrl = require('../controller/product-controller');

    app.route('/products')
        .get(ctrl.get_allproducts)
        .post(ctrl.add_product);

    // app.route('products/:id')
    //     .get(ctrl.get_productbyid)
    //     .update(ctrl.update_product)
    //     .delete(ctrl.delete_product);
}