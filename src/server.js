require('dotenv').config();
const express = require('express')
const app = express()
const configviewengine = require('./config/viewengine');
const webroutes = require('./routes/web');  
const connection = require('./config/database');
const port = process.env.PORT;
const hostname = process.env.HOST;
// config req.body
app.use(express.json( )); // Used to parse JSON bodies
app.use(express.urlencoded( )); //Parse URL-encoded bodies
// config template engine
configviewengine(app);
// config static files
app.use('/',webroutes);
// test connection
// connection();
//
// connection.query(
//   'select * from Users u',
//   function(err, results, fields) {
//     console.log(">> errors",err);
//     console.log(">> results",results); // results contains rows returned by server
//   }
// );
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})