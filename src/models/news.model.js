const connection = require('../config/database');

const getDataCrawl = async (req, res) => {
    var data = []
    await connection.promise().query(
        'select * from News as n where n.flag_update = 1'
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
    let main_query = 'select * from News as n where n.flag_update = 1'
    var data = []
    switch(params.category) {
        case "'news'":
            query = main_query + ' and n.category = 0'
            break;
        case "'addmissions'":
            query = main_query + ' and n.category = 1'
            break;
        case "'technology'":
            query = main_query + ' and n.category = 2'
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

