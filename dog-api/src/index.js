import './style.css';
import fetchDogs from './api';

document.addEventListener('DOMContentLoaded', (event) => {
    // const content = document.querySelector('.content');
    // content.appendChild(fetchDogs);
    fetchDogs();
})
