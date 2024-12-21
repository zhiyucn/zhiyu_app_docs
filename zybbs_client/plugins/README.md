# 智宇论坛插件开发概念

Python之内的就先不说了，这里主要介绍一下智宇论坛插件开发的一些概念。  

## 插件目录结构

插件目录结构如下：

```
./plugins/
```

插件为.py文件，插件入口点为`run`函数，登录的钩子为`login`函数，并会附带token参数。

## 一些概念

- `token`：登陆时返回的身份验证令牌，用于身份验证，千万不要泄露！
- `hook`: 钩子，插件可以使用钩子来扩展功能，比如登录时触发钩子，可以执行一些操作。