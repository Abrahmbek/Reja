const express = require("express");                      //express ni chaqirib olyapmiz      

const app = express();                             // app ga express ni tenglab olyapmiz



// MongoDB call
 
 const db = require("./server").db();           // mongo db ni chaqirib olyapmiz  client ni ichida db ni olyapmiz   

const mongodb = require("mongodb");          // newmongodb ichida id bor oshaning uchun bia qaytadan require qilib oldik


//1: Kirish code
app.use(express.static("public"));                  //  routing ichidagi public file ni serverga ulanga klient larga ochib beryapmiz
app.use(express.json());                       // kirib kelayotgan malumotlarni express json formatdan object formatiga  aylantirib olyapmiz
app.use(express.urlencoded({extended: true}));   // traditional frontend nni post qilib otkazib yuboryapti

// 2: Session code
// 3: Views code

 app.set("views",   "views");                     // frontend file larni viewa orqali topasan deyapmiz 
 app.set("view engine",  "ejs",);   //frontend ni ejs orqali qurishni aytyapmiz


// 4 Routing code
 
app.post("/create-item", (req, res) => {          // bu qismlar end poit deb ataladi  //form ni ichidagi create -item 
     console.log("user entered  /create-item")
 const new_reja = req.body.reja;                      // browser.js ni  html ni ichida kelyapti 
 db.collection("plans").insertOne({ reja: new_reja}, (err, data) => {   // va db ga borib 
    console.log(data.ops);
    res.json(data.ops[0]);
 });
}); 

// delete session
app.post("/delete-item", (req, res) =>{
    const id = req.body.id;               // bu yerda id orqali qiymatni qabul qilib olyapti
   db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id) }, function(err, data){
    res.json ({state: "success"});
   }
   );     
   
});
  


   //update qismi
   
app.post("/edit-item", (req, res) =>{
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
        {_id: new mongodb.ObjectId(data.id)},
     {$set: {reja: data.new_input} },
    function(err, data) {
        res.json({state: "success"});
    });
   
});

 // delete-all session
 app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({state: "hamma rejalar ochirildi"});
        });
    }
   });


/// res.json   res.send   res.end    // res.render

 app.get ("/", function (req, res) {            //general path  ga kirganda function ishga tushadi     
                       
     db.collection("plans")      //mongo db ni collection plans ni ichidagi static method 
       .find()                      // hamm narsani top izlayapti
       .toArray((err, data) => {          // cva bizga arry qilib malumotlsarni qaytarib beryapti
       if(err) {                         // agar bizga error bolsa uni kirsat 
           console.log(err);
           res.end("something went wrong");
       } else {                                    // aks holda itmes ichidagi datalarni olib ber deyapmiz
           res.render("reja", { items: data});      // ejs orqali javob beryapmiz data ni ham birga yuboryapmiz     
          }
    });
});

//
// app.get('/author', (req, res) => {
//     res.render('author', {user: user})
// })

module.exports = app;