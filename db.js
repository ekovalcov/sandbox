const MongoClient = require('mongodb').MongoClient;
const printCollection = require('debug')('collection'),
      printConnection = require('debug')('connection'), 
      printSearchResult = require('debug')('search');
const {createObjectForIdSearch} = require('./helpers')

const url = 'mongodb+srv://ekovalcov:KfHan%3D4V%21%26dLDvEw%29sWb%7D@cluster0-o2rqp.mongodb.net';
const dbName = 'jokes'; 
 
const getConnection = async () => await MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true }).connect()
const extractCollection = connection => connection.db(dbName).collection(dbName);

const getJokesByAuthor = async (name, connection) => {
  printConnection(connection)
  const collection = extractCollection(connection)
  printCollection(collection)
  const res = await collection.find({author: name}).toArray()
  printSearchResult(res)
  return res
} 

module.exports = {
  getConnection,
  getJokesByAuthor
}


