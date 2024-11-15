export const getAllSalesCostGPRecords = () => {
    console.log("Getting records....");
    fetch('https://42ud7vp741.execute-api.us-east-1.amazonaws.com/prod/getSalesCostGrossProfit',
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }})
        .then(async response => {
            const data = response.json()
            console.log(data)
            return data;
        })
        .catch(error => console.error(error));
};

export const putSalesCostGPRecord = (data) => {
    console.log("Putting record....");
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    };
    console.log( JSON.stringify(data))
    fetch('https://p0o7wm7aa4.execute-api.us-east-1.amazonaws.com/prod/putSalesCostGrossProfit', requestOptions)
        .then(async response => {
            const data = response.json()
            console.log(data);
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            return data;
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
};

export const aggregateSalesCostGPRecord = (companyName, yearMonth) => {
    console.log("Fetching and running metrics on record....");
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            yearMonth: "2024-01",
            companyName: "TestCompany"
        }),
    };
    fetch('https://jd80lqbh98.execute-api.us-east-1.amazonaws.com/prod/aggregateSalesCostGrossProfit', requestOptions)
        .then(async response => {
            const data = response.json()
            console.log(data);
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
};
