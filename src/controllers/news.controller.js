require('dotenv').config();
const connection = require('../config/database');
const NewModel = require('../models/news.model.js')

class NewController {
    getDataCrawl = async (req, res) => {
        await NewModel.getDataCrawl().then(result => {
            let news_array = [];
            let addmisions_array = [];
            let technology_array = [];
            result.forEach((element, index) => {
                switch(element.category) {
                    case 0:
                        news_array.push(element)
                        break;
                    case 1:
                        addmisions_array.push(element)
                        break;
                    case 2:
                        technology_array.push(element)
                        break;
                    default:
                }
            })
            let data = {
                'news': news_array,
                'addmisions':  addmisions_array,
                'technology': technology_array
            }
            res.render('../views/index.pug',{ datas: data });
        });
        
     };

     getDataCrawlWithSearch = async (req, res) => {
        let query_value = req.query;
        await NewModel.getDataCrawlWithSearch(query_value).then(result => {
            switch(query_value.category) {
                case "'news'":
                    return res.render('../views/newsEvent.pug',{ datas: result });
                    break;
                case "'addmissions'":
                    return res.render('../views/addmisions.pug',{ datas: result });
                case "'technology'":
                    return res.render('../views/technology.pug',{ datas: result });
                default:
            }
            
        });
        
     };
}


 module.exports = new NewController;

