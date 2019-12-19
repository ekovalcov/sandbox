const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://ekovalcov:KfHan%3D4V%21%26dLDvEw%29sWb%7D@cluster0-o2rqp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });


client.connect(err => {
  const collection = client.db("sample_geospatial").collection("shipwrecks");

  console.log(collection.find({ watlev: 'always dry', feature_type: 'Wrecks - Visible', chart: 'US,US,graph,Chart 17405', }).toArray().then(result => {
    console.log(result)
    client.close()
  }))

});