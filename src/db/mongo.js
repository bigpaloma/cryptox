import { MongoClient } from "mongodb";
import { MONGO_URL } from "$env/static/private"

const client = new MongoClient("mongodb+srv://admin:admin@cluster0.okbhkt2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

export function startMongo() {
    console.log("starting Mongo...");
    return client.connect();
}

export default client.db("showcase_linguala")