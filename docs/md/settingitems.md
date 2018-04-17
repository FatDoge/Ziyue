# **配置项**

#### Ziyue 支持两种不同的初始化方式。一种是构造方法初始化对象，另一种是调用```init```方法：
```
<!-- 方法 1 -->
<script>
    new Ziyue({
        el:'#comment',
        appId:'your appid',
        appKey:'your appkey'
    })
</script>

<!-- 方法 2 -->
<script>
    var ziyue = new Ziyue();
    ziyue.init({
        el:'#comment',
        appId:'your appid',
        appKey:'your appkey'
    })
</script>
```

## el

- 类型:String
- 默认值:#comment
- 必要性:true

#### Ziyue 的初始化挂载器。可以是一个CSS 选择器，也可以是一个实际的HTML元素。
```
new Ziyue({
    el:'#comment'
})

// or 
new Ziyue({
    el:document.getElementById('comment')
})
```

!> 在使用时，请保证该元素的唯一性。

## appId

- 类型:String
- 默认值:null
- 必要性:true

#### 从```LeanCloud```的应用中得到的```appId```.

> 参考获取appid和appkey。

```
new Ziyue({
    appId:'your leancloud appid'
})
```
## appKey

- 类型:String
- 默认值:null
- 必要性:true

#### 从LeanCloud的应用中得到的```appKey```.

> 参考获取appid和appkey。
```
new Ziyue({
    appKey:'your leancloud appkey'
})
```

## region

- 类型:String
- 默认值:cn
- 必要性:false

#### 存储节点：在```Ziyue```中初始化时默认遵循```Leancloud SDK```的节点规则(默认中国大陆节点)，可选值：
- ```cn``` - 中国大陆节点
- ```us``` - 海外节点

```
new Ziyue({
    region:'cn'
})
```

!> 可以先确认本地网络环境是否可以访问Leancloud服务器：ping "oip6cvm7.api.lncld.net".
!> 该配置从v1.1.9-beta4 开始支持

## placeholder

- 类型:String
- 默认值:null
- 必要性:false

#### 评论框```占位提示符```。
```
new Ziyue({
    placeholder:'Just so so'
})
```

## notify

- 类型:Boolean
- 默认值:false
- 必要性:false

#### 评论回复邮件提醒，请参考邮件提醒配置。
```
new Ziyue({
    notify:false
})
```

!> 该功能目前处于测试阶段，请谨慎使用。

## verify

- 类型:Boolean
- 默认值:false
- 必要性:false

#### 验证码服务。
```
new Ziyue({
    verify:false
})
```

## path

- 类型:String
- 默认值:window.location.pathname
- 必要性:false

#### 当前文章页路径，用于区分不同的文章页，以保证正确读取该文章页下的评论列表。可选值:
- window.location.pathname (默认值，推荐)
- window.location.href
- 自定义

!> - 请保证每个文章页路径的唯一性，否则可能会出现不同文章页下加载相同评论列表的情况。
!> - 如果值为window.location.href，可能会出现随便加不同参数进入该页面，而被判断成新页面的情况。

```
new Ziyue({
    path:window.location.pathname
})
```

!> 该配置从v1.1.5+ 开始支持

## avatar

- 类型:String
- 默认值:mm
- 必要性:false

#### ```Gravatar``` 头像展示方式。可选值:
- ''(空字符串)
- mm
- identicon
- monsterid
- wavatar
- retro
- hide (v1.1.8-beta+ 开始支持)
#### 更多信息，请查看头像配置。
```
new Ziyue({
    avatar:`mm`
})
```

!> 该配置从v1.1.7+ 开始支持

## avatar_cdn

- 类型:String
- 默认值:https://gravatar.loli.net/avatar/
- 必要性:false

#### Gravatar头像镜像，默认用的```gravatar.loli.net```

```
new Ziyue({
    avatar_cdn:'https://gravatar.loli.net/avatar/'
})
```

!> 该配置从v1.1.9-beta5+ 开始支持

## guest_info

- 类型:Array
- 默认值:['nick','mail','link']
- 必要性:false

#### 评论者相关属性。
```
new Ziyue({
    guest_info:['nick'] // 只想要昵称
})
```

!> 该配置从v1.1.8-beta+ 开始支持

## pageSize

- 类型:Number
- 默认值:10
- 必要性:false

#### 评论列表分页，每页条数。
```
new Ziyue({
    pageSize:10
})
```

!> 该配置从v1.1.8-beta2+开始支持

## lang

- 类型:String
- 默认值:zh-cn
- 必要性:false

#### 多语言支持，目前可选：
- ```zh-cn```
- ```en```

#### 如需自定义语言，请参考i18n。
```
new Ziyue({
    lang:'zh-cn'
})
```
## leancloud

- 类型:Bool
- 默认值:true
- 必要性:false

#### 更换数据存储商家(Leancloud)
```
new Ziyue({
    leancloud:'true'
})
```

!> 该配置从v1.1.8-beta9+开始支持