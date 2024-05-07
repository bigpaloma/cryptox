export async function load({ parent, params }) {
    const { priceArr } = await parent()
    const coin = params.coinId
    const fetchUrl = `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=chf&days=365&precision=2`;
    const fetchUrl2 = `https://api.coingecko.com/api/v3/coins/${coin}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`;
    const options = {
        method: "GET",
        headers: {
            accept: 'application/json',
            'x_cg_demo_api_key': 'CG-rvAGs4CrucXf6PdJK7ENnXf4'
        }
    }
    const response1 = await fetch(fetchUrl, options)
        .then((response) => response.json())
        .then((data) => {
            return data
        })
        .catch(error => {
            throw (error);
        });
    const response2 = await fetch(fetchUrl2, options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            return data
        })
        .catch(error => {
            throw (error);
        });
    return {
        response1, response2
    };
};