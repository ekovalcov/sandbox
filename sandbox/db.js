const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ekovalcov:KfHan=4V!&dLDvEw)sWb}@cluster0-o2rqp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
// //   const collection = client.db("test").collection("devices");
// const collection = db.collection("devices");
//   console.log(collection.find({}))
//   client.close();
// });

MongoClient.connect(uri, function(err, db) {

    var cursor = client.db("test").collection("devices");

    cursor.each(function(err, doc) {

        console.log(doc);

    });
}); 