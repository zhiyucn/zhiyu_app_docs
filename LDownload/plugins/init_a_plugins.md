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
2024/12/8补充：现在必须要多定义一个inject_class函数，返回是否可以在其他插件中使用此插件提供的API，返回布尔值，必须要定义，否则加载失败  
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

    def gets_filelist(self):
        for i in filelist:
            print(i + " ")

    def run_download(plugin_name):
        print("插件" + plugin_name + "开始调用PluginsAPI以运行下载任务")
        go()

    def plugin_window_create(self, title, geometry):
        # 创建插件的窗口，每个插件一个窗口
        global plugin_window
        plugin_window.append(tk.Toplevel(mainwindow))
        plugin_window[-1].title(title)
        plugin_window[-1].geometry(geometry)
    
    def window_add_label(self, text, plugin_name):
        # 在插件窗口中添加标签
        global plugin_window
        plugin_window[-1].label = tk.Label(plugin_window[-1], text=text)
        plugin_window[-1].label.pack(pady=10)

    def window_add_entry(self, text, plugin_name):
        # 在插件窗口中添加输入框
        global plugin_window
        plugin_window[-1].entry = tk.Entry(plugin_window[-1])
        plugin_window[-1].entry.pack(pady=10)

    def window_add_button(self, text, plugin_name, command):
        # 在插件窗口中添加按钮
        global plugin_window
        plugin_window[-1].button = tk.Button(plugin_window[-1], text=text, command=command)
        plugin_window[-1].button.pack(pady=10)

    def read_add_entry(self, plugin_name):
        # 读取插件窗口中的输入框内容
        global plugin_window
        return plugin_window[-1].entry.get()

    def window_destroy(self, plugin_name):
        # 销毁插件窗口
        global plugin_window
        plugin_window[-1].destroy()
        plugin_window.pop()
```

- add_file(url): 向下载队列中添加一个文件
- gets_filelist(): 获取下载队列中的文件
- run_download(): 启动下载器
- plugin_window_create(title, geometry): 创建插件的窗口，每个插件一个窗口
- window_add_label(text, plugin_name): 在插件窗口中添加标签
- window_add_entry(text, plugin_name): 在插件窗口中添加输入框
- window_add_button(text, plugin_name, command): 在插件窗口中添加按钮
- read_add_entry(plugin_name): 读取插件窗口中的输入框内容
- window_destroy(plugin_name): 销毁插件窗口
2024/12/7补充：PluginAPI源码更新到1.2.1Beta

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
2024/12/7补充：该插件只能在从源码运行，打包好的版本没有控制台，所以不能用print函数输出信息。
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

将上面编写的插件文件放到plugins文件夹中。  
如果你看见了：
```bash
LDownload 命令行插件
1. 添加文件
2. 显示已添加文件
3. 开始下载
4. 退出
请输入选项：
```
说明插件已经被加载。  
运行LDownload的exe文件或者直接从源码运行，这时会生成config.ini,LDownload文件夹和plugins文件夹,将你的插件文件放到plugins文件夹中。  
重启LDownload，这时插件就会被加载。  

## 发布/Publish
你可以将你的插件发布到GitHub或者其他代码托管平台，让其他人可以下载到你的插件。

## 注意事项/Cautions
- 插件中不能使用tkinter模块，我也不知道为什么，会出现一个空白Tk窗口，关了主程序就出问题。(替代方案：使用PluginAPI的窗口创建机制，虽然基于tkinter，但没有刚才那个问题)  
2024/12/7补充：只是不能用tkinter创建窗口，messagebox等功能还是可以的。
- 不要用控制台输出，打包主程序时有noconsole，控制台会被隐藏，所以你不能用print函数输出信息。