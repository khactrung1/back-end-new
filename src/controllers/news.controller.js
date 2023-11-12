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
                    case 'neu':
                        element.publication_image = 'https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-DH-Kinh-Te-Quoc-Dan-NEU.png'
                        break;
                    case 'hust':
                        element.publication_image = 'https://www.hust.edu.vn/uploads/sys/logo-dhbk-1-02_130_191.png'
                        break;
                    case 'ajc':
                        element.publication_image = 'https://quanlydaotao.ajc.edu.vn/FileManager/Upload/images/logoFooter.png'
                        break;
                    case 'hau':
                        element.publication_image = 'https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-DH-Kien-Truc-Ha-Noi-HAU-Ori.png'
                        break;
                    case 'haui':
                        element.publication_image = 'https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-DH-Cong-nghiep-Ha-Noi.png'
                        break;
                    case 'hvnh':
                        element.publication_image = 'https://hvnh.edu.vn/medias/hvnh/vi/10.2023/hvnh.admin/media/Logo%20HVNH.png'
                        break;
                    case 'napa':
                        element.publication_image = 'https://cdn.haitrieu.com/wp-content/uploads/2022/12/Logo-Hoc-vien-Hanh-chinh-Quoc-gia.png'
                        break;
                    case 'ueb':
                        element.publication_image = 'https://ueb.edu.vn/Content/images/logo.png'
                        break;
                    case 'uet':
                        element.publication_image = 'https://uet.vnu.edu.vn/wp-content/uploads/2017/02/logo2_new.png'
                        break;
                    case 'ulis':
                        element.publication_image = 'https://ulis.vnu.edu.vn/files/uploads/2016/11/Banner-ULIS-1500x125-1.jpg'
                        break;
                    case 'ussh':
                        element.publication_image = 'https://ussh.vnu.edu.vn/uploads/ussh/logo.png'
                        break;
                    case 'utc':
                        element.publication_image = 'https://cdn.haitrieu.com/wp-content/uploads/2022/03/Logo-Dai-Hoc-Giao-Thong-Van-Tai-UTC.png'
                        break;
                    case 'vnua':
                        element.publication_image = 'https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-Hoc-Vien-Nong-Nghiep-Viet-Nam-VNUA.png'
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
            res.render('../views/index.pug',{ datas: data });
        });
        
     };

     getDataCrawlWithSearch = async (req, res) => {
        let query_value = req.query;
        await NewModel.getDataCrawlWithSearch(query_value).then(result => {
            result.forEach((element, index) => {
                switch(element.publication) {
                    case 'neu':
                        element.publication_image = 'https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-DH-Kinh-Te-Quoc-Dan-NEU.png'
                        break;
                    case 'hust':
                        element.publication_image = 'https://www.hust.edu.vn/uploads/sys/logo-dhbk-1-02_130_191.png'
                        break;
                    case 'ajc':
                        element.publication_image = 'https://quanlydaotao.ajc.edu.vn/FileManager/Upload/images/logoFooter.png'
                        break;
                    case 'hau':
                        element.publication_image = 'https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-DH-Kien-Truc-Ha-Noi-HAU-Ori.png'
                        break;
                    case 'haui':
                        element.publication_image = 'https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-DH-Cong-nghiep-Ha-Noi.png'
                        break;
                    case 'hvnh':
                        element.publication_image = 'https://hvnh.edu.vn/medias/hvnh/vi/10.2023/hvnh.admin/media/Logo%20HVNH.png'
                        break;
                    case 'napa':
                        element.publication_image = 'https://cdn.haitrieu.com/wp-content/uploads/2022/12/Logo-Hoc-vien-Hanh-chinh-Quoc-gia.png'
                        break;
                    case 'ueb':
                        element.publication_image = 'https://ueb.edu.vn/Content/images/logo.png'
                        break;
                    case 'uet':
                        element.publication_image = 'https://uet.vnu.edu.vn/wp-content/uploads/2017/02/logo2_new.png'
                        break;
                    case 'ulis':
                        element.publication_image = 'https://ulis.vnu.edu.vn/files/uploads/2016/11/Banner-ULIS-1500x125-1.jpg'
                        break;
                    case 'ussh':
                        element.publication_image = 'https://ussh.vnu.edu.vn/uploads/ussh/logo.png'
                        break;
                    case 'utc':
                        element.publication_image = 'https://cdn.haitrieu.com/wp-content/uploads/2022/03/Logo-Dai-Hoc-Giao-Thong-Van-Tai-UTC.png'
                        break;
                    case 'vnua':
                        element.publication_image = 'https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-Hoc-Vien-Nong-Nghiep-Viet-Nam-VNUA.png'
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

