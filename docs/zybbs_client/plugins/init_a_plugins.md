# 实战：如何编写一个插件

## 准备工作
- Python 3.10+
- 可以使用 IDE 或者文本编辑器编写代码
- 了解 Python 基本语法，如变量、函数、模块、类等
  
## 编写插件
话不多说，开始实战吧！  

### 第一步：创建插件目录
这里就不用管了，程序会自动创建插件目录。

### 第二步：创建插件文件
新建一个文件，就叫`study.py`吧，这个只要不是特殊的名字都可以。

### 第三步：编写插件代码
```python
from tkinter import messagebox

def login(token):
    messagebox.showinfo("提示","登录成功")
    # 插件登录的hook
def run():
    messagebox.showinfo("提示","测试")
    # 插件运行的hook
```

### 第四步：开始测试
在命令行中运行`python study.py`，如果一切顺利，你不会看到`登录成功`和`测试`这两个信息
放到程序的plugins目录下，重启程序，你会看到一个消息，登录后会显示`登录成功`，运行程序会显示`测试`