const express = require('express');
const path = require ('path');
const configviewengine = (app) => {
    // config template engine
app.set('views',path.join('./src', 'views'));
app.set('view engine', 'pug')
app.use( express.static(path.join('./src', 'public')));
app.locals.moment = require('moment');
}
module.exports = configviewengine;