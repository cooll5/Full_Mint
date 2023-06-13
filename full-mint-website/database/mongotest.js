const {MongoClient} = require('mongodb');
//import 'mongodb';

async function main_database() {
    const uri = "mongodb+srv://test:123qwe@cluster0.yx64vnj.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try{
        await client.connect();

        await createListing(client, {
            name: "Lovely Loft",
            summaty: "A charming loft in Paris",
            b: 1,
            t: 4
        })
        //await listDatabases(client);
    }catch(e){
        console.error(e);
    } finally {
        await client.close();
    }
}

main_database().catch(console.error);

async function createListing(client, newListing) {
    const result = await client.db("sample_3").collection("listingsAndReviews").insertOne(newListing);
    console.log('New listing created with the following id: ' + result.insertedId)
}

async function listDatabases(client){
    const databaseslist = await client.db().admin().listDatabases();

    console.log("Databases: ");
    databaseslist.databases.forEach(db => {
        console.log('- ' + db.name);
    })
}

//module.exports = {main_database};