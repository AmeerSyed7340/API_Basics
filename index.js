let url = 'https://api.thecatapi.com/v1/breeds';
const api_key = "DEMO_API_KEY";

let options = {
    method: 'GET',
    headers: {
        'x-api-key': api_key
    }
}

fetch(url, options)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(indiviualData => {
            displayCountryCode(indiviualData);
            displayName(indiviualData);
            displayWeight(indiviualData);
        });

    });

function displayCountryCode(obj) {
    console.log(`Country code: ${obj.country_code}`);
}

function displayName(obj) {
    console.log(`Name: ${obj.name}`);
}

function displayWeight(obj) {
    const imperial = obj.weight.imperial;
    const metric = obj.weight.metric;

    console.log(`Weight in imperial: ${imperial}, metric: ${metric}`);
}