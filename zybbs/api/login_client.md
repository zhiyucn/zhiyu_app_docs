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
C#示例代码如下：
```C#
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Newtonsoft.Json;

class Program
{    
    static void Main(string[] args)
    {
        string url = "https://bbs.zhiyuhub.top/api/client/login";
        string username = "your_username";
        string password = "your_password";

        HttpClient client = new HttpClient();
        client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        client.DefaultRequestHeaders.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36");

        string content = $"{{\"username\":\"{username}\",\"password\":\"{password}\"}}";
        StringContent data = new StringContent(content, Encoding.UTF8, "application/json");

        HttpResponseMessage response = client.PostAsync(url, data).Result;
        if (response.IsSuccessStatusCode)
        {
            string result = response.Content.ReadAsStringAsync().Result;
            dynamic json = JsonConvert.DeserializeObject(result);
            if (json.status == "ok")
            {
                Console.WriteLine("登录成功，token：" + json.token + " 用户ID：" + json.user_id);
            }
            else
            {
                Console.WriteLine("登录失败，原因：" + json.message);
            }
        }
        else
        {
            Console.WriteLine("网络错误，状态码：" + response.StatusCode);
        }
    }
}
```
C++示例代码如下：
```C++
#include <iostream>
#include <string>
#include <sstream>
#include <map>
#include <curl/curl.h>
#include <json/json.h>

int main()
{
    std::string url = "https://bbs.zhiyuhub.top/api/client/login";
    std::string username = "your_username";
    std::string password = "your_password";

    std::string params = "username=" + username + "&password=" + password;

    CURL *curl;
    CURLcode res;

    curl = curl_easy_init();
    if (curl) {
        curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, params.c_str());
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, write_callback);
        std::stringstream response;
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);
        res = curl_easy_perform(curl);
        if (res != CURLE_OK) {
            std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
        }
        else {
            Json::Value root;
            Json::Reader reader;
            bool parsingSuccessful = reader.parse(response.str(), root);
            if (!parsingSuccessful) {
                std::cerr << "Failed to parse JSON" << std::endl;
            }
            else {
                if (root["status"].asString() == "ok") {
                    std::cout << "登录成功，token：" << root["token"].asString() << " 用户ID：" << root["user_id"].asString() << std::endl;
                }
                else {
                    std::cout << "登录失败，原因：" << root["message"].asString() << std::endl;
                }
            }
        }
        curl_easy_cleanup(curl);
    }
    return 0;
}

size_t write_callback(void *contents, size_t size, size_t nmemb, void *userp)
{
    ((std::stringstream*)userp)->write((char*)contents, size * nmemb);
    return size * nmemb;
}
```
Rust示例代码如下：
```rust
use std::io::Read;
use std::process::Command;
use std::str;

fn main() {
    let mut cmd = Command::new("curl");
    cmd.arg("-X")
        .arg("POST")
        .arg("-d")
        .arg(format!("{{\"username\":\"{0}\",\"password\":\"{1}\"}}", "your_username", "your_password"))
        .arg(format!("{}/api/client/login", "https://bbs.zhiyuhub.top"));
    let output = cmd.output().expect("failed to execute process");
    let response = str::from_utf8(&output.stdout).unwrap();
    let json: serde_json::Value = serde_json::from_str(response).unwrap();
    if json["status"] == "ok" {
        println!("登录成功，token：{} 用户ID：{}", json["token"], json["user_id"]);
    } else {
        println!("登录失败，原因：{}", json["message"]);
    }
}
```
Node.js示例代码如下：
```javascript
const https = require('https');

const options = {
  'method': 'POST',
   'hostname': 'bbs.zhiyuhub.top',
   'path': '/api/client/login',
   'headers': {
     'Content-Type': 'application/json'
   }
};

const req = https.request(options, (res) => {
  let chunks = [];

  res.on('data', (chunk) => {
    chunks.push(chunk);
  });

  res.on('end', () => {
    const body = Buffer.concat(chunks);
    const response = JSON.parse(body.toString());
    if (response.status === 'ok') {
      console.log(`登录成功，token：${response.token} 用户ID：${response.user_id}`);
    } else {
      console.log(`登录失败，原因：${response.message}`);
    }
  });
});

req.write(JSON.stringify({ username: 'your_username', password: 'your_password' }));
req.end();

req.on('error', (error) => {
  console.error(error);
});
```
Java实例代码如下：
```java
import java.io.BufferedReader;  
import java.io.InputStreamReader;  
import java.net.HttpURLConnection;  
import java.net.URL;  
import java.net.URLEncoder;  
import java.util.HashMap;  
import java.util.Map;

public class LoginClient {

    public static void main(String[] args) throws Exception {
        String url = "https://bbs.zhiyuhub.top/api/client/login";
        String username = "your_username";
        String password = "your_password";

        Map<String, String> params = new HashMap<String, String>();
        params.put("username", username);
        params.put("password", password);

        String paramsStr = URLEncoder.encode(params.toString(), "UTF-8");

        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        //add reuqest header
        con.setRequestMethod("POST");
        con.setRequestProperty("User-Agent", "Mozilla/5.0");
        con.setRequestProperty("Accept-Language", "en-US,en;q=0.5");

        // Send post request
        con.setDoOutput(true);
        con.getOutputStream().write(paramsStr.getBytes("UTF-8"));

        int responseCode = con.getResponseCode();
        System.out.println("Response Code : " + responseCode);

        BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        //print result
        System.out.println(response.toString());
    }
}
```