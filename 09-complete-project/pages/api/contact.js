import { insertDocument } from "../../utils/db";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const document = req.body;
    const result = await insertDocument(document);
    if (result) {
      res.status(201).json({message: 'Your message has been correctly submitted!'});
    }
  }
}