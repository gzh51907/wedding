const express = require('express');
const {PORT} = require('./config.json');
const allRouter = require('./routers');

//创建一个链接
const app = express();

// 静态资源服务器
app.use(express.static('./'));  //设置server.js所在目录为根目录

app.use(allRouter);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})