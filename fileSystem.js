// const fs= require("fs");
// fs.writeFile("hello.txt",
//     "Today we are learning file system",
//     if(error)=>{
//         console.log("error in creating the file");
//         {
//             console.log("file is created")
//         }
//     }
// )
FileSystem.readFile("hello.txt", "utf-8", (error,data)=>{
    if(error){
        console.log("error in loading")
    }else{
        console.log("File Data:" ,data)
    }
})