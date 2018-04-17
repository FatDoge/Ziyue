# **头像设置**

#### Ziyue 使用的是Gravatar 作为评论列表头像(感谢```gravatar.loli.net```提供的镜像服务)。
#### 目前有以下7种可选值:

参数值 | 表现形式 | 备注
--- | --- | ---
空字符串```''``` | [![adb831a7fdd83dd1e2a309ce7591dff8.jpg](https://i.loli.net/2018/04/17/5ad57f7529127.jpg)](https://i.loli.net/2018/04/17/5ad57f7529127.jpg) | Gravatar官方图形
mm | [![adb831a7fdd83dd1e2a309ce7591dff8.png](https://i.loli.net/2018/04/17/5ad57f7527d35.png)](https://i.loli.net/2018/04/17/5ad57f7527d35.png) | 神秘人(一个灰白头像)
identicon | [![adb831a7fdd83dd1e2a309ce7591dff8 (1).png](https://i.loli.net/2018/04/17/5ad57f752d38e.png)](https://i.loli.net/2018/04/17/5ad57f752d38e.png) | 抽象几何图形(根据邮箱或昵称生成)
monsterid | [![adb831a7fdd83dd1e2a309ce7591dff8 (2).png](https://i.loli.net/2018/04/17/5ad57f752a757.png)](https://i.loli.net/2018/04/17/5ad57f752a757.png) | 小怪物
wavatar | [![adb831a7fdd83dd1e2a309ce7591dff8 (3).png](https://i.loli.net/2018/04/17/5ad57f752bc55.png)](https://i.loli.net/2018/04/17/5ad57f752bc55.png) | 用不同面孔和背景组合生成的头像(根据邮箱或昵称生成)
retro | [![adb831a7fdd83dd1e2a309ce7591dff8 (4).png](https://i.loli.net/2018/04/17/5ad57f752ea6c.png)](https://i.loli.net/2018/04/17/5ad57f752ea6c.png) | 八位像素复古头像(根据邮箱或昵称生成)
hide | | 不显示头像

!> 参数值hide在版本v1.1.8-beta开始支持。

!> 如果参数avatar的值不等于列表中的任意一种，则默认为mm。

```
new Ziyue({
    ...
    avatar:'' // (''/mm/identicon/monsterid/wavatar/retro/hide)
});
```