const fs= require("fs").promises;
fs.writeFile("hello.txt",
    "Today we are learning file system",
    if(error)=>{
        console.log("error in creating the file");
        {
            console.log("file is created")
        }
    }
)
// FileSystem.readFile("hello.txt", "utf-8", (error,data)=>{
//     if(error){
//         console.log("error in loading")
//     }else{
//         console.log("File Data:" ,data)
//     }
// })

async function readFile() {
    try{
       const data = await fs.readFile("hello.txt", "utf-8");
       console.log("File Content", data)
    } catch (error) {
        console.error("Error in file content", error)
    }
    }


readFile();