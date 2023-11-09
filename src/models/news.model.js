const connection = require('../config/database');

const getDataCrawl = async (req, res) => {
    var data = []
    await connection.promise().query(
        'select * from news as n where n.flag = 0 order by date desc'
    )
    .then(result => {
        return data = result[0]
    })
    .catch(error => {
        throw error;
    });

    return data
};

const getDataCrawlWithSearch = async (params, req, res) => {
    let main_query = 'select * from news as n where n.flag = 0'
    var data = []
    switch(params.category) {
        case "'news'":
            query = main_query + ' and n.category = 1 order by date desc'
            break;
        case "'addmissions'":
            query = main_query + ' and n.category = 2 order by date desc'
            break;
        case "'technology'":
            query = main_query + ' and n.category = 3 order by date desc'
            break;
        default:
    }
    await connection.promise().query(
        query
    )
    .then(result => {
        return data = result[0]
    })
    .catch(error => {
        throw error;
    });
    return data
};

module.exports = {
    getDataCrawl,
    getDataCrawlWithSearch
};

