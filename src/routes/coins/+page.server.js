

export const load = async ({ url }) => {
    let page = 1
    if (url.searchParams.get('page') !== null) {
        page = url.searchParams.get('page') + 1
    }
    let amount = 100
    if (url.searchParams.get('amount') !== null) {
        amount = url.searchParams.get('amount')
    }
    const fetchUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=chf&per_page=${amount}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=de&precision=2`;
    const options = {
        method: "GET",
        headers: {
            Accept: 'application/json',
            'x_cg_demo_api_key': 'CG-rvAGs4CrucXf6PdJK7ENnXf4'
        }
    }
    const response = await fetch(fetchUrl, options)
        .then((response) => response.json())
        .then((data) => {
            return data
        })
        .catch(error => {
            throw (error);
        });
    return {
        response
    }
}