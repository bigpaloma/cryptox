import db from "$db/mongo"

const dataDb = db.collection("dataset");

export const load = async (event) => {
    //auth.js
    const session = await event.locals.auth()
    //mongodb
    const cursor = await dataDb.find({})
    const prices = []
    const priceArr = []
    priceArr.push

    for await (const doc of cursor) {
        prices.push(doc)
    }
    for (const price of prices) {
        const timestamp = new Date(price.time_open).getTime()
        priceArr.push([timestamp, price.rate_close])
    }
    return {
        priceArr,
        session
    }
}