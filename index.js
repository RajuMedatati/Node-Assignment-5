var http = require("http");

// const httpServer = http.createServer(handleServer);

// function handleServer(req, res) {
//     res.status(200).send("Welcome to Dominos!")
// }
// httpServer.listen(8081,()=>{
//     console.log(`App is running on ${PORT}`)
// })

// module.exports = httpServer;

const express = require("express")

const app = express()
const PORT = 8081;
app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`)
})

app.get("/welcome",(req,res)=>{
    console.log(req.url)
    res.status(200).send("Welcome to Dominos!")
})

app.get("/contact",(req,res)=>{
    console.log(req.url)
    res.status(200).send(`{
        phone: '18602100000', 
        email: 'guestcaredominos@jublfood.com' 
    }`)
})

app.get("*",(req,res)=>{
    console.log(req.url)
    res.status(404).send("Page Not Found")
})