const http =require("http");
const fs= require("fs");

const server = http.createServer((req , res) =>{
    let message = url.parse
    if (req.url ==="/"){
        res.end("my home page")
    }
