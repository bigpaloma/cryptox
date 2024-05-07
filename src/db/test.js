import db from "$db/mongo"

const usersDb = db.collection("users")
const dataDb = db.collection("dataset");

const findUsers = async () => {
    const data = await usersDb.findOne({});
    return data;
}


const addData = async () => {
    const url = "https://rest.coinapi.io/v1/exchangerate/BTC/USD/history?period_id=5MIN&time_start=20240101&limit=300"
    const options = {
        method: "GET",
        headers: {
            Accept: 'application/json',
            'X-CoinAPI-Key': 'FF365E1E-9A8F-484E-9AC2-11AE863C5ED4'
        }
    }
    fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            dataDb.insertMany(data)

        })
        .catch(error => {
            throw (error);
        });
}

const deleteData = async () => {
    dataDb.deleteMany({})
}

export const priceArr = []

const getData = async () => {
    const cursor = await dataDb.find({})
    const prices = []

    for await (const doc of cursor) {
        prices.push(doc)
    }
    for (const price of prices) {
        priceArr.push(price.rate_close)
    }
}


export const data = getData()