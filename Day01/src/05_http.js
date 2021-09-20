const http=require('http')
const fs=require('fs')

http.createServer((request,response)=>{
    const {url,method} =request
    if(url === '/' && method === 'GET'){
        fs.readFile('index2.html',(err,data)=>{
            if(err) {
                response.writeHead(500,{
                    'content-Type':'text/plain;charset=utf-8'
                })
                response.end('500 服务器挂了')
                return
            }
        })
    }
})

http.createServer().on('request', function (request, response) {
    console.log('收到请求：' + request.url)
    response.write('HelloWorld')
    response.end()
  })
