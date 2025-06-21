# 客户端登录接口

Web暂不公开，仅提供客户端登录接口文档。  

## 接口地址
```url
bbs.zhiyuhub.top/api/client/login
```

## 请求方式
POST

## 请求参数
- `username`: 用户名 必填  
- `password`: 密码(明文) 必填  

## 返回结果
类型: JSON  
成功:
```json  
    "status": 'ok',
    "token": "登录成功的token，用于身份验证",
    "user_id": "登录的用户ID，用于获取用户名"
```
失败:  
```json  
    "message": "登录失败的原因，可以直接给用户，不是乱七八糟的错误码",    
    "status": "error"
```  

## 示例代码
Python示例代码如下：
```Python
import requests

url = 'https://bbs.zhiyuhub.top/api/client/login'
data = {
    'username': 'your_username',
    'password': 'your_password'
}
response = requests.post(url, data=data)
if response.status_code == 200:
    result = response.json()
    if result['status'] == 'ok':
        print('登录成功，token:', result['token'], '用户ID:', result['user_id'])
    else:
        print('登录失败，原因:', result['message'])
else:
    print('网络错误，状态码:', response.status_code)
```
