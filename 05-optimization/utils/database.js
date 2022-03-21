import * as config from "./config.js";
import { MongoClient } from "mongodb";

export async function fetchAll() {
  const uri = `mongodb+srv://${config.mongoUser}:${config.mongoPass}@cluster0.hpooo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(uri);
  const db = client.db('meetups');
  const collection = db.collection("meetups");
  const fetchedData = await collection.find().toArray();
  client.close();
  return fetchedData;
}

export async function fetchFeatured() {
  const all = await fetchAll();
  return all.filter(event => event.isFeatured);
}

export async function fetchFiltered(filter) {
  const { year, month } = filter;
  const all = await fetchAll();
  return all.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });
}

export async function fetchById(id) {
  const all = await fetchAll();
  return all.filter(event => event._id === id)[0];
}