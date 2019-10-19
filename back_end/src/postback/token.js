const jwt = require('jsonwebtoken');

/**
 * 
 * @param {String} data         加密数据
 * @param {Number} expiresIn    有效期 60，"2 days"，"10h"，"7d"
 */

let { secret } = require('../config.json');
function create(data, expiresIn = '7d') {
    let token = jwt.sign({ data }, secret, {
        expiresIn
    });
    return token;
}

function verify(token){
    let res;
    try{
        let result = jwt.verify(token, secret);
        // console.log('token校验：',result)
        res = true;
    }catch(err){
        res = false;
    }
    
    return res;
}

module.exports = {
    create,
    verify
}