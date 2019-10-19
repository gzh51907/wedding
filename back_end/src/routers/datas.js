/*
 * 数据CRUD
 * 增：C（Create）
 * 删：D（Delete）
 * 改：U（Update）
 * 查：R（Retrieve）
 */

const express = require('express');
const Router = express.Router();

//将方法引出来
const { mongo } = require('../db');
const { postBack, token } = require('../postback');

//查找所有数据
Router.get('/getdata', async (req, res) => {
    let { colName } = req.query;
    let result = await mongo.find(colName);
    if (result.length) {
        res.send(postBack.postCode({ data: result }))// {code:1,msg:'success',data}
    }
    else {
        res.send(postBack.postCode({ code: 0 }));
    }
})


//模糊查询
Router.get('/probablydata', async (req, res) => {
    let { colName, probably } = req.query;
    let result = await mongo.find(colName, { 'title': { $regex: probably } });
    if (result.length) {
        res.send(postBack.postCode({ data: result }))// {code:1,msg:'success',data}
    }
    else {
        res.send(postBack.postCode({ code: 0 }));
    }
})

//查找指定类型数据
Router.get('/assigndata', async (req, res) => {
    let { colName, classify } = req.query;
    let result = await mongo.find(colName, { [classify]: { $exists: true } });
    if (result.length) {
        res.send(postBack.postCode({ data: result }))// {code:1,msg:'success',data}
    }
    else {
        res.send(postBack.postCode({ code: 0 }));
    }
})

//查找购物车数据
Router.get('/getCart', async (req, res) => {
    let { colName, username } = req.query;
    let result = await mongo.find(colName, { username: username });
    if (result.length) {
        res.send(postBack.postCode({ data: result }))// {code:1,msg:'success',data}
    }
    else {
        res.send(postBack.postCode({ code: 0 }));
    }
})

//检测用户名
Router.get('/checkUSN', async (req, res) => {
    let { colName, username, password } = req.query;
    console.log(req.query)
    let result = null;
    if (password) {
        result = await mongo.find(colName, { username, password });
    } else {
        result = await mongo.find(colName, { username });
    }
    if (result.length) {
        res.send(postBack.postCode())// {code:1,msg:'success',data}
    }
    else {
        res.send(postBack.postCode({ code: 0 }));
    }
})


//增加用户
Router.post('/createdata', async (req, res) => {
    console.log(req.body)
    let { colName, username, password } = req.body;
    try {
        let result = await mongo.create(colName, [{ username, password, regtime: new Date() }]);
        res.send(postBack.postCode());
    } catch{
        res.send(postBack.postCode({ code: 0 }));
    }
})

//增加购物车商品
Router.post('/addCart', async (req, res) => {
    console.log(req.body)
    let { colName, username, id, img, title, norms, price, qty, kucun } = req.body;
    try {
        let result = await mongo.create(colName, [{ username, id, img, title, norms, price, qty, kucun, regtime: new Date() }]);
        res.send(postBack.postCode());
    } catch{
        res.send(postBack.postCode({ code: 0 }));
    }
})



//动态路由（指定ID修改数据）
Router.route('/:id')
    .delete(async (req, res) => {
        let { id } = req.params;
        let numid = id - 0;
        let { colName } = req.query;
        try {
            let result = await mongo.remove(colName, { id: numid });
            res.send(postBack.postCode());
        } catch{
            res.send(postBack.postCode({ code: 0 }));
        }
    })
    .patch(async (req, res) => {
        // let { id } = req.params;
        // let numid = id - 0;
        // let { colName, data } = req.body;
        // try {
        //     let result = await mongo.updateMany(colName, { id: numid }, {$set:{ data }});
        //     res.send(postBack.postCode());
        // } catch{
        //     res.send(postBack.postCode({ code: 0 }));
        // }
    })
    .get(async (req, res) => {
        let { id } = req.params;
        let numid = id - 0;
        let { colName } = req.query;
        try {
            let result = await mongo.find(colName, { id: numid });
            res.send(postBack.postCode({ data: result }));
        } catch{
            res.send(postBack.postCode({ code: 0 }));
        }
    })


//七天免登录功能
Router.get('/verify', (req, res) => {
    let Authorization = req.get('Authorization');

    // 校验token有效性
    let result = token.verify(Authorization);
    // console.log(postBack.postCode({ code: result ? 1 : 0 }))
    res.send(postBack.postCode({ code: result ? 1 : 0 }))
});

Router.get('/login', async (req, res) => {
    let { username, password, freePass } = req.query;

    let result = await mongo.find(colName, { username, password });

    if (result.length > 0) {
        let Authorization
        if (freePass == 'true') {
            Authorization = token.create(username)
        }
        res.send(postBack.postCode({ data: Authorization }))
    }
    else {
        res.send(postBack.postCode({ code: 0, data: ['登录失败'] }))
    }
})

module.exports = Router;