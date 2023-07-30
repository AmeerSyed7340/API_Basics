import './style.css';
import fetchDogs from './api';
import Dog from './dog';
import Render from './render'

document.addEventListener('DOMContentLoaded', (event) => {
    // const content = document.querySelector('.content');
    // content.appendChild(fetchDogs);
    let url = 'https://api.thecatapi.com/v1/breeds';
    fetchDogs(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(indiviualData => {
                let name = indiviualData.name;
                let country = indiviualData.country_code;
                let weight = indiviualData.weight.metric;
                let dog = new Dog(name, country, weight);

                console.log(dog);
                Render(dog);
            });
        });
})
