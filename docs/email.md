# **Valine 评论系统中的邮件提醒设置**

## 设置Leancloud

#### 进入```Leancloud```>选择你的评论所存放的```应用```>设置>```邮件模板```，按下图设置好```用于重置密码的邮件主题```>然后```保存```:

[![006qRazegy1fiht7mk8cqj311y0di0uj.jpg](https://i.loli.net/2018/04/17/5ad58272c3f8d.jpg)](https://i.loli.net/2018/04/17/5ad58272c3f8d.jpg)

!> 注：请注意修改链接为你的博客或者网站首页。

```
<p>Hi, {{username}}</p>
<p>
你在 {{appname}} 的评论收到了新的回复，请点击查看：
</p>
<p><a href="你的网址首页链接" style="display: inline-block; padding: 10px 20px; border-radius: 4px; background-color: #3090e4; color: #fff; text-decoration: none;">马上查看</a></p>
```

## 初始化Valine

#### 设置```Valine```的```notify```为```true```即可打开邮件提醒。```v1.1.4-rc```以后的版本支持。
```
//
var valine = new Valine({
    el: '.comment',
    notify: true, // 邮件提醒!!!
    verify: true, // 验证码
    app_id: 'your appid',
    app_key: 'your appkey',
    placeholder: 'ヾﾉ≧∀≦)o来啊，快活啊!'
})
```

!> 发送次数过多，可能会暂时被Leancloud 屏蔽邮件发送功能

!> 由于邮件提醒功能使用的Leancloud的密码重置邮件提醒，只能传递昵称、邮箱两个属性，所以邮件提醒链接```无法直达```指定文章页。**请悉知**。

!> **该功能目前还在测试阶段，谨慎使用。**

!> 开启邮件提醒会默认开启```验证码```选项。

#### 好了，赶紧去试试吧。