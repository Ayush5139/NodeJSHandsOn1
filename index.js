const http = require("http") // using require we import modules (core modules)
const dotenv = require("dotenv")
dotenv.config()

const app = http.createServer((req,res)=>{
    res.write("Node.js is an open source server enviorment. It is free. It runs on various platforms such as Windows, Linux, Unix, Mac OS X, etc.Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.")
    res.end()
})

const port = 9000
  
app.listen(port,()=>{
    console.log(`Server Is running in the port ${port}`)
})