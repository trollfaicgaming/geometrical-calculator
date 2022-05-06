const express = require("express")
const path = require("path")
const app = express()

app.use("/files", function(req, res){
    let names = req.path.substring(1).split("/")
    if (names.length === 0 || names[0] === ""){
        return res.sendFile(path.join(__dirname, "files", "index.html"))
    }
    res.sendFile(path.join(__dirname, "files", ...names))
}) // whoops

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.listen(8080)
