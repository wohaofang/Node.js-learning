# 写在前面
坐在电脑面前看小视频的时候，（额，下载好的技术视频。。。）感到有点疲劳，于是想起了是不是可以自己搭建一个视频网站，这样的话就可以拿着手机躺在床上看了，省去了又要到手机上面再下载一次的流程。一来节省内存，二来锻炼了技术。恩，此计甚妙，开工~

最开始是需求获取，我是这样打算的，把视频放到一个文件夹里面，让后台去扫描文件夹，将里面所有的视频找到后呈现给浏览器端，浏览器端能选择视频播放就可以了。

然后是技术选择，以前写过几行jsp，对jsp这种不用自己写路由等底层操作细节的语言很是喜欢。拿定了用java写的想法后，突然一乍，上次写jsp还是在一年前。。。现在重操旧业的话肯定要去看半天书，那么换成node算了，前段时间一直在学习node，主体知识还有点印象，正好可以对前段时间学习node做一个回顾。

后台服务方面，Node的路由管理需要自己去维护，为了快速，因此我选择了用Express + ejs

HTML方面，选择新增的`video`标签提供视频播放功能

# Express
首先从Express说起， 在菜鸟教程 [http://www.runoob.com/nodejs/nodejs-express-framework.html](http://www.runoob.com/nodejs/nodejs-express-framework.html) 查阅了Express的简单使用方法，开始了网站的环境搭建
## Express简介
* 简洁而灵活, 对原生Node开发Web进行了扩展，使用 Express 可以快速地搭建一个完整功能的网站。
* Express 框架核心特性：
    - 可以设置中间件来响应 HTTP 请求。
    - 定义了路由表用于执行不同的 HTTP 请求动作。
    - 可以通过向模板传递参数来动态渲染 HTML 页面。(ejs/jade等)
    
## 安装Express
```

cnpm install express --save
```
关于更多模块的安装详见上面那个网址

安装完成以后，可以用下面的命令查看结果(express 使用的版本号)：
```
cnpm list express
```

## 使用Express
接下来就是用Express去做一个管理了
### 获得express模块
```
var express = require('express');
var app = express();
```
### 静态资源管理
```
app.use(express.static("./public")); 
```
静态资源管理，有了它之后，不用我们自己去手动设置资源的路由，直接将资源放到public目录下面就好

比如，可以直接在ejs中引用`public/mp4/hahaha.mp4`这个文件，通过这样的形式：
```
<video src="mp4/hahaha.mp4" controls="controls" id="source">
</video>
```

### get请求管理
get请求只需要一句简短的代码：
```
app.get('/path', function (req, res) {

    // ... do something
}
```
post请求与其类似

### 完整的使用流程代码：

```
const express = require('express');
const app = express();
const ejs = require('ejs');
const fs = require('fs');

app.set('view engine', 'ejs'); // 设置模板引擎为ejs
app.use(express.static("./public")); // 静态资源管理，有了它之后，不用我们自己去手动设置资源的路由，直接将资源放到public目录下面就好
app.get('/video', function (req, res) {
    const list = [];
    var flag = false;
    // 使用Promise获得视频文件目录
    var p = new Promise(function (resolve,reject) {
        fs.readdir(__dirname+'/public/mp4',function (err,files) {
            if(err){
                console.log(err);
                reject(err);
                return;
            }
            files.forEach(function (file,index) {
                list.push(file);
            })
            resolve(list);
        });
    });

    p.then(function (list) {
        console.log(list);
        // 在回调中获得目录后，将目录以及页面响应给浏览器
        res.render('video',{list:list});
    },function (err) {
        console.log(err);
    });
});

const server = app.listen(80,'192.168.191.1');

```

## Express使用心得
1. 简单高效
2. 网上的文档较好，没有遇到什么坑
3. 业务逻辑方面还是需要原生Node的支持，熟悉原生Node很重要

# ejs
接下来是页面展现部分ejs
## ejs简介
EJS是一个简单高效的模板语言，通过数据和模板，可以生成HTML标记文本。可以说EJS是一个JavaScript库,也可以说是一个后台模板（像JSP那样的模板）
## ejs的使用
### 首先是安装
```
npm install ejs
```

### 在Express中使用
1. 设置模板引擎为ejs
```

app.set('view engine', 'ejs');
```
2. 在根目录新建一个文件夹`views`，在里面放置xxx.ejs文件
3. 响应给浏览器
```
res.render('video',{list:list});
```
video为ejs的文件名，后缀名.ejs可以省略不写

list为ejs内部使用的变量

### 语法
```
<% %>流程控制标签
<%= %>输出标签（原文输出HTML标签）
<%- %>输出标签（HTML会被浏览器解析）
<%# %>注释标签
% 对标记进行转义
-%>去掉没用的空格
说明：ejs中的逻辑代码全部用JavaScript
```
### ejs完整代码
```
<body>

<video src="mp4/<%=list[0]%>" controls="controls" id="source">
    您的浏览器不支持 video 标签。
</video>
<div id="box">

    <% for(var i=0;i<list.length;i++){%>
    <div class="<%= i==0?'cur':''%>"><%= list[i] %></div>
    <% }%>
</div>
<script>

    var box = document.getElementById('box');
    var chids = box.children;
    var mp4 = []; 
    // 获得视频的url
    for(var i=0;i<chids.length;i++){
        mp4.push(chids[i].textContent);
    }
    var source = document.getElementById('source');
    box.addEventListener('click', function(ev){
        for(var i=0;i<chids.length;i++){
            chids[i].classList.remove('cur');
            if(ev.target==chids[i]){
                source.src = 'mp4/'+mp4[i];
                ev.target.classList.add('cur');
            }
        }
    },false);
</script>

</body>
```


## ejs的使用心得
1. 仿佛在使用JSP
2. 虽然很相似，但是才刚入门，肯定要继续学习

# 写在后面
至此，用到的技术栈总结完毕，该demo的截图如下：
![Markdown](http://i2.muimg.com/1949/163378b207f394cb.jpg)
