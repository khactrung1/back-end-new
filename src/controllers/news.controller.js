require('dotenv').config();
const connection = require('../config/database');
const NewModel = require('../models/news.model.js')

class NewController {
    getDataCrawl = async (req, res) => {
        console.log('STEP 1')
        await NewModel.getDataCrawl().then(result => {
            console.log('sos',result)
            res.status(201).send(result);
        });
        console.log('STEP 4')
        
     };
}


 module.exports = new NewController;

