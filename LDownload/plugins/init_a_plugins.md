# 制作一个插件/Making a Plugin
LDownload 下载器支持插件的扩展，你可以通过编写Python脚本来制作自己的插件。

## 准备工作/Prerequisites
- Python 3.10+
- 一台电脑

## 开始/Getting Started
创建一个Python文件  
定义run,need和description三个函数

```python
class PluginsAPI:
    def __init__(self, plugin_dir):
        self.plugin_dir = plugin_dir
        self.descriptions = load_plugins(plugin_dir)

    def add_file(self, url):
        global filelist
        filelist.append(url)

        print(filelist)

    def gets_filelist(self):
        for i in filelist:
            print(i + " ")

    def run_download(plugin_name):
        print("插件" + plugin_name + "开始调用PluginsAPI以运行下载任务")
        go()
```

run函数将会在插件被激活时执行，description函数将会返回插件的描述，need函数将会返回插件需要的参数，可以用这个使用Plugin API中没有但是源文件中有的方法。  
2024/12/7补充：need函数填写的参数必须与run函数调用的参数一致，否则会报错。

## Plugin API/Plugin API
LDownload 下载器提供了一些API，你可以在run函数中调用这些API。  

Plugin API 源代码:  
```python
class PluginsAPI:
    def __init__(self, plugin_dir):
        self.plugin_dir = plugin_dir
        self.descriptions = load_plugins(plugin_dir)

    def add_file(self, url):
        global filelist
        filelist.append(url)
        print(filelist)

    def run_download():
        go()
```

- add_file(url): 向下载队列中添加一个文件
- run_download(): 启动下载器

### 调用Plugin API/Use Plugin API
在run函数中调用Plugin API  
实例：
```python
# plugins/sample.py

def description():
    return "This is a sample plugin."

def need():
    return "PluginsAPI"

def run(PluginsAPI):
    api = PluginsAPI("PluginsAPI")
    while True:
        print("LDownload 命令行插件")
        print("1. 添加文件")
        print("2. 显示已添加文件")
        print("3. 开始下载")
        print("4. 退出")
        choice = input("请输入选项：")
        if choice == "1":
            url = input("请输入URL：")
            api.add_file(url)
        elif choice == "2":
            files = api.gets_filelist()
            print(files)
        elif choice == "3":
            api.run_download()
        elif choice == "4":
            break
        else:
            print("输入错误，请重新输入！")
```
解释：
- 定义description函数，返回插件的描述。
- 定义need函数，返回插件需要的参数。
- 定义run函数，参数为PluginsAPI。
- 实例化PluginsAPI，传入插件目录。
- 循环，让用户选择功能。
- 如果选择添加文件，则调用add_file函数，传入URL。
- 如果选择显示已添加文件，则调用gets_filelist函数，获取下载队列中的文件。
- 如果选择开始下载，则调用run_download函数，启动下载器。
- 如果选择退出，则退出循环。
- 其他情况，打印错误信息。


## 调试/Debug

运行LDownload的exe文件或者直接从源码运行，这时会生成config.ini,LDownload文件夹和plugins文件夹,将你的插件文件放到plugins文件夹中。
重启LDownload，这时插件就会被加载。
如果出现一个一动不动的下载进度条，那么恭喜你，你的插件运行成功了。（至于为什么一动不动，其实是那个下载链接是我随便填的，不过下载已经开始了）

## 发布/Publish
你可以将你的插件发布到GitHub或者其他代码托管平台，让其他人可以下载到你的插件。

## 注意事项/Cautions
- 插件中不能使用tkinter模块，我也不知道为什么，会出现一个空白Tk窗口，关了主程序就出问题。