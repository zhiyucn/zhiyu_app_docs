# 创建API插件 / Making a API Plugin

## 介绍 / Introduction

LDownload插件扩展功能于2024/12/8日支持了自制API的功能，形式为插件

## 开始 / Getting Started

### 准备 / Preparation
- 可以看懂文字的脑子
- Python变量、函数、模块的概念
- 电脑
- 文本编辑器
- Python 3.10+

### 步骤 / Steps
一.创建一个插件，自己去看init_a_plugin.md  
二.创建好后，一般是像这样  
```python
def run():
    pass
def description():
    return "This is a API plugin"
def need:
    return ""
def inject_class():
    return False
```
三.先将inject_class()返回值改成True，表示这个插件是会注入自己所有得类到主程序中
四.创建一个类
```python
class MyAPI:
    def __init__(self):
        pass
    def my_api_function(self):
        pass
```
这时API插件就完成了，让我们来看看怎么调用
```python
def run(MyAPI):
    api = MyAPI()
    api.my_api_function()
def description():
    return "我要调用API插件的功能"
def need:
    return "MyAPI"
def inject_class():
    return False
```
将这两个插件放到plugins目录下，启动！

## 注意事项 / Tips
API插件暂时没有需要注意的地方，init_a_plugin.md里的注意事项都是GUI的，我就没听说过API插件要GUI的。