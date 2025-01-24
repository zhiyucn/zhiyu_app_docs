# 使用
ZMod 的模组文件是一个后缀txt的文本文件，每一行为一个指令，以下是全部指令（这些指令均遵守 ZMod 标准游戏扩展语法 版本v1）：
## 指令
\# 注释  
如：  

```
# 这是一条注释  
```
set key value  
设置key的值为value，仅可以设置为预先定义的key，key列表每个游戏都不一样，请参考本文最下方的key列表。  

sleep time  
等待time秒，time为float型或int型，单位为秒。  

stop  
停止游戏，执行 Scratch 中的“停止全部脚本”积木块。  

say message  
让游戏主角说话，message为字符串。  

## key列表
### 凉皮RPG
camera-size  
为游戏设置相机大小，可理解为FOV。  
speed  
设置凉皮鸭（主角）的移动速度，3为正常速度，数值越高越慢  
fo    
难以置信的优化状态，设置为0则为正常渲染，1为急速渲染  
