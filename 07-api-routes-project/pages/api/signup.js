import * as config from '../../helpers/config';
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if(req.method === 'POST') {
    const email = req.body.email;
    const uri = `mongodb+srv://${config.mongoUser}:${config.mongoPass}@cluster0.hpooo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    const client = await MongoClient.connect(uri);
    const db = client.db('meetups');
    const collection = db.collection('emails');
    await collection.insertOne({email: email});
    client.close();

    res.status(201).json({email: email});
  }
}