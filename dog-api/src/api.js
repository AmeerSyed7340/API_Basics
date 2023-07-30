import Dog from './dog';
import Render from './render'

let url = 'https://api.thecatapi.com/v1/breeds';
const api_key = "DEMO_API_KEY";

let options = {
    method: 'GET',
    headers: {
        'x-api-key': api_key
    }
}

function fetchData() {
    console.log("Im inside fetchdata");
    fetch(url, options)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        data.forEach(indiviualData => {
            let name = indiviualData.name;
            let country = indiviualData.country_code;
            let weight = indiviualData.weight.metric;
            let dog = new Dog(name, country, weight);

            console.log(dog);
            Render(dog);
        });

    });
}

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

export default fetchData