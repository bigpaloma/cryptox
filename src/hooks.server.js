import { startMongo } from "$db/mongo";

startMongo().then(() => {
    console.log("Mongo started")
}).catch(e => { console.error(e) })

export { handle } from "./auth"