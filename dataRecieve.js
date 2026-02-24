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

const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World from Express.js!');
});

app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});
