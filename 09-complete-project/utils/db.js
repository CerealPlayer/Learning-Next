import * as config from "./config";
import { MongoClient } from "mongodb";

async function getClient() {
  const uri = `mongodb+srv://${config.mongoUser}:${config.mongoPass}@cluster0.hpooo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  return await MongoClient.connect(uri);
}

export async function insertDocument(object) {
  const client = await getClient()
  const db = client.db('blog');
  const collection = db.collection('messages');
  const res = await collection.insertOne(object);

  return res.acknowledged;
}