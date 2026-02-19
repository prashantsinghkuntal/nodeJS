const http =require("http");
const fs= require("fs");

const server = http.createServer((req , res) =>{
    let message = url.parse
    if (req.url ==="/"){
        res.end("my home page")
    }
    else if (req.url ==="/about"){
            res.end("my about page")
    }
    res.end("hello my 1st server")

    })

    server.listen(3000 , ()=>{
    console.log("my port is runnning on :3000")
})

