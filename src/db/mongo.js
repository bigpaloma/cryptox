import { MongoClient } from "mongodb";
import { MONGO_URL } from "$env/static/private"

const client = new MongoClient(MONGO_URL)

export function startMongo() {
    console.log("starting Mongo...");
    return client.connect();
}

export default client.db("showcase_linguala")