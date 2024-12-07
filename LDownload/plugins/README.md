# LDownload 插件
这是介绍，不是开发文档！！如果要文档，请去旁边那个文件，没错，就是和我在一个目录里的init_a_plugin.md文件！！！
## 可使用的第三方库
我们为了防止一些依赖问题，您在开发插件的时候，可以直接使用以下第三方库：
- requests
- PySide6
## 插件开发基本流程
| 新建Python文件  
| 创建run,description, need函数  
| 编写run函数，实现插件的主要功能  
| 编写description函数，返回插件的描述信息  
| 编写need函数，返回插件所需的参数  
|创建UI，但没法用tkinter  
|测试  
|发布到Github  