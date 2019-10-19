const { MongoClient } = require('mongodb');

const { DBurl, DBName } = require('../config.json');
// 连接MongoDB
async function connect() {
    let result = null;
    try {
        let client = await MongoClient.connect(DBurl,{ useNewUrlParser: true,useUnifiedTopology: true });
        let db = client.db(DBName);
        result = { client, db }
    } catch (err) {
        result = err
    }
    return result
}

                                        //商品信息
/**
 * 增
 * @param {String} colName  集合名称（即数据库名称）
 * @param {Array} data     要添加的数据
 */

async function create(colName, data) {
    let { db, client } = await connect(); //把connect函数里的db,和client传回来
    let col = db.collection(colName);  //链接数据库
    let result = await col.insertMany(data); //添加数据（方法）,返回一个promise对象
    client.close();     //关闭数据库
    return result       //把结果传回user.js,再返回给前端
}


/**
 * 删
 * @param {String} colName 
 * @param {Object} query 
 */
async function remove(colName, query) {
    let { db, client } = await connect();
    let col = db.collection(colName);
    console.log(query)
    let result = await col.deleteMany(query);
    client.close();
    return result;
}

/**
 * 改
 * @param {String} colName 
 * @param {Object} query 
 * @param {Object} data     需要修改的数据
 */
async function update(colName, query, data) {
    let { db, client } = await connect();
    let col = db.collection(colName);

    let result = await col.updateMany(query, data);
    client.close();
    return result;
}


/**
 * 查
 * @param {String} colName  集合名称
 * @param {Object} query    查询条件
 */


async function find(colName, query = {}) {
    let { db, client } = await connect();
    let col = db.collection(colName);
    console.log(query)
    // 查询数据库
    let result = await col.find(query).toArray();
    //查询要另外用到toArray这个方法，最终也是传回一个promise对象

    client.close();
    return result;
}
// (async () => {
//     let aa = await find('userinf')
//     console.log(aa)
// })()


module.exports = {
    create,
    remove,
    update,
    find
}