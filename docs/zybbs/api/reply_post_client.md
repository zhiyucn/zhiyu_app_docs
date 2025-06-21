# 评论（回贴）API

Web端接口照例不公开，仅客户端

## 接口地址
```url
https://bbs.zhiyuhub.top/api/client/create_comment/<post_id>
```
## 请求方式
POST

## URL参数
- post_id：帖子ID，只能为int整数

## 请求参数
- "token"：用户登录token  
- "content"：评论内容，字符串类型

## 返回数据
成功：
```json
{
    "status": "ok",
    "comment_id": "评论ID,一般没啥用"
}
```
失败：
```json
{
    "status": "error",
    "message": "错误信息"
}
```

## 实例
Python示例：
```python
import requests

url = "https://bbs.zhiyuhub.top/api/client/create_comment/1"
data = {
    "token": "用户登录token",
    "content": "评论内容"
}
response = requests.post(url, data=data)
print(response.json())
```
Node.js示例：
```javascript
const axios = require('axios');

const url = 'https://bbs.zhiyuhub.top/api/client/create_comment/1';
const data = {
    token: '用户登录token',
    content: '评论内容'
};

axios.post(url, data)
   .then(response => {
        console.log(response.data);
    })
   .catch(error => {
        console.log(error);
    });
```
Java示例：
```java
OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n    \"token\": \"用户登录token\",\n    \"content\": \"评论内容\"\n}");
Request request = new Request.Builder()
   .url("https://bbs.zhiyuhub.top/api/client/create_comment/1")
   .post(body)
   .addHeader("Content-Type", "application/json; charset=utf-8")
   .build();

Response response = client.newCall(request).execute();

if (response.isSuccessful()) {
    System.out.println(response.body().string());
} else {
    System.out.println("Unexpected code " + response);
}
```
C++示例：
```cpp
#include <iostream>
#include <string>
#include <curl/curl.h>

using namespace std;

string token = "用户登录token";
string content = "评论内容";

int main() {
    CURL *curl;
    CURLcode res;

    curl = curl_easy_init();
    if (curl) {
        string url = "https://bbs.zhiyuhub.top/api/client/create_comment/1";
        string data = "{\n    \"token\": \"" + token + "\",\n    \"content\": \"" + content + "\"\n}";

        curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data.c_str());
        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, (curl_slist*)("Content-Type: application/json; charset=utf-8"));

        res = curl_easy_perform(curl);

        if (res != CURLE_OK) {
            cout << "curl_easy_perform() failed: " << curl_easy_strerror(res) << endl;
        }

        curl_easy_cleanup(curl);
    }

    return 0;
}
```
C实例：
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <curl/curl.h>

int main(int argc, char *argv[]) {
    const char *url = "https://bbs.zhiyuhub.top/api/client/create_comment/1";
    const char *token = "用户登录token";
    const char *content = "评论内容";

    CURL *curl;
    CURLcode res;
    struct curl_slist *headers = NULL;

    curl = curl_easy_init();
    if (curl) {
        curl_easy_setopt(curl, CURLOPT_URL, url);
        curl_easy_setopt(curl, CURLOPT_POST, 1L);

        struct curl_httppost *formpost = NULL;
        struct curl_httppost *lastptr = NULL;

        static const char *token_name = "token";
        static const char *content_name = "content";

        curl_formadd(&formpost, &lastptr, CURLFORM_COPYNAME, token_name, CURLFORM_COPYCONTENTS, token, CURLFORM_END);
        curl_formadd(&formpost, &lastptr, CURLFORM_COPYNAME, content_name, CURLFORM_COPYCONTENTS, content, CURLFORM_END);

        curl_easy_setopt(curl, CURLOPT_HTTPPOST, formpost);
        headers = curl_slist_append(headers, "Content-Type: application/json; charset=utf-8");
        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);

        res = curl_easy_perform(curl);

        if (res != CURLE_OK) {
            fprintf(stderr, "curl_easy_perform() failed: %s\n", curl_easy_strerror(res));
        }

        curl_easy_cleanup(curl);
        curl_slist_free_all(headers);
    }

    return 0;
}
```
Curl示例：
```bash
curl -X POST \
  https://bbs.zhiyuhub.top/api/client/create_comment/1 \
  -H 'Content-Type: application/json; charset=utf-8' \
  -d '{
    "token": "用户登录token",
    "content": "评论内容"
}'
```
C#示例：
```csharp
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Newtonsoft.Json;

namespace ConsoleApp1
{
    class Program
    {        
        static void Main(string[] args)
        {
            string token = "用户登录token";
            string content = "评论内容";

            HttpClient client = new HttpClient();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            client.DefaultRequestHeaders.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36");

            string url = "https://bbs.zhiyuhub.top/api/client/create_comment/1";
            string json = "{\n    \"token\": \"" + token + "\",\n    \"content\": \"" + content + "\"\n}";
            var contentData = new StringContent(json, Encoding.UTF8, "application/json");

            HttpResponseMessage response = client.PostAsync(url, contentData).Result;
            if (response.IsSuccessStatusCode)
            {
                string responseContent = response.Content.ReadAsStringAsync().Result;
                dynamic result = JsonConvert.DeserializeObject(responseContent);
                Console.WriteLine(result.comment_id);
            }
            else
            {
                Console.WriteLine("Error: " + response.StatusCode);
            }

            Console.ReadKey();
        }
    }
}
```
Kotlin示例：
```kotlin
import java.net.URL
import java.net.HttpURLConnection
import java.net.URLEncoder
import java.io.OutputStreamWriter
import java.io.BufferedReader
import java.io.InputStreamReader

fun main(args: Array<String>) {
    val token = "用户登录token"
    val content = "评论内容"

    val url = URL("https://bbs.zhiyuhub.top/api/client/create_comment/1")
    val conn = url.openConnection() as HttpURLConnection
    conn.requestMethod = "POST"
    conn.setRequestProperty("Content-Type", "application/json; charset=utf-8")
    conn.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36")

    val writer = OutputStreamWriter(conn.outputStream)
    writer.write("{\n    \"token\": \"$token\",\n    \"content\": \"$content\"\n}")
    writer.flush()

    val reader = BufferedReader(InputStreamReader(conn.inputStream))
    var response = reader.readLine()
    println(response)
}
```