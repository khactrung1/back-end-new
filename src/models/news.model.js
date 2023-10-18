const connection = require('../config/database');

const getDataCrawl = async (req, res) => {
    console.log("STEP 2");
    var data = []
    await connection.promise().query(
        'select * from Users u'
    )
    .then(result => {
        console.log("resulllt", result[0])
        return data = result[0]
    })
    .catch(error => {
        throw error;
    });
    console.log("STEP 3");
    console.log(">> errors model >>>",data);
    return data
 };

module.exports = {
    getDataCrawl
};


// class NewModel {
//     // table for the db
//     tableName = 'users';

//     getDataCrawl = (params = {}) => {
//         let data = connection.query('select * from Users u')
//         return data;
//     }
// }

// module.exports = new NewModel;
