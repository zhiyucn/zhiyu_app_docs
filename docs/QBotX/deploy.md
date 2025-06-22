# 部署
这里没有Onebot的配置教程！请自行查找，连接方式为反向WebSocket (Napcat叫WebSocket客户端)，端口默认为8080
## On Windows
### 极简方法
```powershell
Invoke-WebRequest -Uri "http://docs.zhiyuhub.top/QBotX/install.ps1" -OutFile "$env:TEMP\install.ps1" ;; Start-Process -FilePath "powershell" -ArgumentList "-ExecutionPolicy Bypass -File $env:TEMP\install.ps1" -Wait
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
