require('dotenv').config();
const connection = require('../config/database');
const NewModel = require('../models/news.model.js')

class NewController {
    getDataCrawl = async (req, res) => {
        await NewModel.getDataCrawl().then(result => {
            let news_array = [];
            let addmisions_array = [];
            let technology_array = [];
            let newest_news_array = [];
            newest_news_array = result.slice(0,5)
            result.forEach((element, index) => {
                switch(element.publication) {
                    case 'NEU':
                        element.publication_image = 'https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-DH-Kinh-Te-Quoc-Dan-NEU.png'
                        break;
                    case 'hust':
                        element.publication_image = 'https://www.hust.edu.vn/uploads/sys/logo-dhbk-1-02_130_191.png'
                        break;
                    default:
                }
                switch(element.category) {
                    case 1:
                        news_array.push(element)
                        break;
                    case 2:
                        addmisions_array.push(element)
                        break;
                    case 3:
                        technology_array.push(element)
                        break;
                    default:
                }
            })
            let data = {
                'newest_news': newest_news_array,
                'news': news_array,
                'addmisions':  addmisions_array,
                'technology': technology_array
            }
            console.log(news_array)
            res.render('../views/index.pug',{ datas: data });
        });
        
     };

     getDataCrawlWithSearch = async (req, res) => {
        let query_value = req.query;
        await NewModel.getDataCrawlWithSearch(query_value).then(result => {
            result.forEach((element, index) => {
                console.log('',element.publication)
                switch(element.publication) {
            
                    case 'NEU':
                        element.publication_image = 'https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-DH-Kinh-Te-Quoc-Dan-NEU.png'
                        break;
                    case 'hust':
                        element.publication_image = 'https://www.hust.edu.vn/uploads/sys/logo-dhbk-1-02_130_191.png'
                        break;
                    case 'hust':
                         element.publication_image = 'https://www.hust.edu.vn/uploads/sys/logo-dhbk-1-02_130_191.png'
                            break;    
                    default:
                }
            });
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

