

const { MongoClient } = require('mongodb');
const dbOperations = require('../api/dbOperations');


async function main(){

  const mongoConnectionString = 'mongodb+srv://dbUser:dbUserPassword@inventoryprojectcluster.fu9tq.mongodb.net/inventory?retryWrites=true&w=majority';
  const client = new MongoClient(mongoConnectionString);

  try {
      await client.connect();

      const db = client.db('inventory');

      //await dbOperations.insertItem(db, 'banana', 6);
      //await dbOperations.getItem(db, 'banana');

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

main().catch(console.error);
