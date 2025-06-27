# 部署
这里没有Onebot的配置教程！请自行查找，连接方式为反向WebSocket (Napcat叫WebSocket客户端)，端口默认为8080
## On Windows
::: danger 警告
如果安装时出现提示说
```
error: Microsoft Visual C++ 14.0 or greater is required. Get it with "Microsoft C++ Build Tools":
      https://visualstudio.microsoft.com/visual-cpp-build-tools/
```
请先前往 https://visualstudio.microsoft.com/visual-cpp-build-tools/ 下载并安装Visual Studio生成工具
需要勾选`Desktop development with C++`或`使用C++的桌面开发`
:::
### 极简方法
#### 源：Github Pages(推荐国外使用)
```powershell
Invoke-WebRequest -Uri "http://docs.zhiyuhub.top/QBotX/install.ps1" -OutFile "$env:TEMP\install.ps1" ;; Start-Process -FilePath "powershell" -ArgumentList "-ExecutionPolicy Bypass -File $env:TEMP\install.ps1" -Wait
```
#### 源：Tencent Cloud EdgeOne Pages(国内推荐)
```powershell
Invoke-WebRequest -Uri "https://script.zhiyuhub.top/install.ps1" -OutFile "$env:TEMP\install.ps1" ;; Start-Process -FilePath "powershell" -ArgumentList "-ExecutionPolicy Bypass -File $env:TEMP\install.ps1" -Wait

```
### 普通方法
1. 克隆仓库
```powershell
git clone https://github.com/zhiyucn/QBotX.git
cd QBotX
```
2. 安装uv
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```
3. 安装依赖
```powershell
uv add -r ./requirements.txt
```
4. 复制模板配置文件（template_config.toml）为 config.toml
5. 编辑 config.toml，填写机器人的配置信息
6. 启动主程序
```powershell
uv run main.py
```

## On Linux or macOS
1. 克隆仓库
```bash
git clone https://github.com/zhiyucn/QBotX.git
cd QBotX
```
2. 安装uv
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
3. 安装依赖
```bash
uv add -r ./requirements.txt
```
4. 复制模板配置文件（template_config.toml）为 config.toml
5. 编辑 config.toml，填写机器人的配置信息
6. 启动主程序
```bash
uv run main.py
```
