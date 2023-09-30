
const express = require("express");
const res = require("express/lib/response");
const app = express();


// Mongodb connect
const db = require("./server").db();

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
    console.log("user etered /create-item")
    console.log(req.body);
    const new_Reja = req.body.Reja;
    db.collection("plans").insertOne({Reja: new_Reja}, (err, data) => {
        console.log(data.ops);
       req.json(data.ops[0]);
    });
});

app.get("/", function (req, res)   {
    console.log("user etered /")
    db.collection("plans")
    .find()
    .toArray((err, data) =>{
        if (err) {
            console.log(err);
            res.end("something went wraong");
        } else {
            console.log(data);
            res.render("Reja",{items: data} );
        }
    })
    
});

module.exports = app;