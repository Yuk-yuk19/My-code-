const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://mongo:ivqvDlmDBEsNmKTjNhYhLlWSYsAlPWua@maglev.proxy.rlwy.net:42667';
const client = new MongoClient(url);

// Database Name
const dbName = 'gamity';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('users');
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  // the following code examples can be pasted here...

  return 'done.';
}

main()