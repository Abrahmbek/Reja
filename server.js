const http = require('http');

const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://Abrahmbek:RawWbrCBIC3CTf87@cluster0.6kdla7u.mongodb.net/Reja";

mongodb.connect(connectionString, 
    {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
},
(err, client) => {
    if (err) console.log("ERROR on connection Mongodb", err);
     else {
        console.log("Mongodb connection succed");
       module.exports = client;

        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3001;
        server.listen(PORT, function ()  {
            console.log(`The server is running successfuly on port : ${PORT}, http://localhost:${PORT}`);
        });
    }
  }
);

