const express = require('express');
const path = require ('path');
const configviewengine = (app) => {
    // config template engine
app.set('views',path.join('./src', 'views'));
app.set('view engine','ejs');
app.use( express.static(path.join('./src', 'public')));
}
module.exports = configviewengine;