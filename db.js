const MongoClient = require("mongodb").MongoClient;
const printCollection = require("debug")("collection"),
  printConnection = require("debug")("connection"),
  printSearchResult = require("debug")("search");
const { toSearchByAuthorObject,  } = require("./helpers");

const url =
  "mongodb+srv://ekovalcov:KfHan%3D4V%21%26dLDvEw%29sWb%7D@cluster0-o2rqp.mongodb.net";
const dbName = "jokes";

const getConnection = async () =>
  await MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).connect();
const extractCollection = connection =>
  connection.db(dbName).collection(dbName);

const getJokesByAuthor = async (telegramMessage, connect) => {
  printConnection(connect);
  const collection = extractCollection(connect);
  printCollection(collection);
  const res = await collection
    .find(toSearchByAuthorObject(telegramMessage))
    .toArray();
  printSearchResult(res);
  return res;
};

const insertJoke = async (telegramMessage, connect) => {
  printConnection(connection);
  const collection = extractCollection(connect);
  printCollection(collection);
  const joke = toJokeObject(telegramMessage)
  return await collection.insert(joke);
};

module.exports = {
  getConnection,
  getJokesByAuthor
};
