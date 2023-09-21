
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require('http');


//1 KIRISH CODE

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2 
//3VIEWS CODE

app.set("views", "views");
app.set("view engine", "ejs");  /// ejs ni ichida biz frontend ni yasymiz


//4routing code
app.post("/create-item", (req, res) =>{
     console.log(req.body);
     res.json({test: "success"});
})
app.get("/", function (req, res) {
res.render("harid");
});


const server = http.createServer(app);
let PORT = 3001;
server.listen(PORT, function () {
    console.log(`The server is running successfuly on port : ${PORT}`);
});