# **快速开始**

## HTML 片段

##### 请在需要评论框的文章页内相应位置引入下面的HTML代码：


```
<head>
    ...
    <script src=".../js/av-min.js"></script>
    <script src='.../js/Ziyue.min.js'></script>
    ...
</head>
<body>
    ...
    <div id="comment"></div>
</body>
```

## 获取appid和appkey

##### 请先登录或注册 LeanCloud, 进入控制台后点击左下角创建应用：
[![006qRazegy1fkwo2fpoetj30h40coaak.jpg](https://i.loli.net/2018/04/17/5ad5764ce0bca.jpg)](https://i.loli.net/2018/04/17/5ad5764ce0bca.jpg)

##### 应用创建好以后，进入刚刚创建的应用，选择左下角的```设置```> ```应用Key```，然后就能看到你的```appid```和```appkey```了：
[![006qRazegy1fkwo6w2b6uj30xe0etjt4.jpg](https://i.loli.net/2018/04/17/5ad5766bc33e4.jpg)](https://i.loli.net/2018/04/17/5ad5766bc33e4.jpg)

!> 为了您的数据安全，请注意设置自己的```安全域名```：
[![006qRazegy1fkxqmddfh1j30qd0go40h.jpg](https://i.loli.net/2018/04/17/5ad5812f6955d.jpg)](https://i.loli.net/2018/04/17/5ad5812f6955d.jpg)

## 配置

##### 修改初始化对象中的appId和appKey的值为上面刚刚获取到的值即可(其他可以默认)。

```
new Ziyue({
    el: '#comment' ,
    notify:false, 
    verify:false, 
    appId: '这里填上面获得的appid',
    appKey: '这里填上面获得的appkey',
    placeholder: 'just go go',
    path:window.location.pathname, 
    avatar:'mm' 
});
```
#### 更多信息请查看配置项。

## npm安装

##### Ziyue 现已发布到npm，可以直接用命令安装：
```
npm install ziyue --save
```

## 评论数据管理

##### 插播一下，关于```评论数据管理```，请自行登录Leancloud应用管理。
##### 具体步骤：```登录```>```选择你创建的应用```>```存储```>选择Class```Comment```
##### 然后就可以尽情的发挥你的权利啦(～￣▽￣)～ 
[![1.jpg](https://i.loli.net/2018/04/17/5ad5760c7de3e.jpg)](https://i.loli.net/2018/04/17/5ad5760c7de3e.jpg)