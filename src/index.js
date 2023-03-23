import './css/styles.css';
var debounce = require('lodash.debounce');
import Notiflix from 'notiflix';

// import getCountry from './test';

const DEBOUNCE_DELAY = 300;

const inputValue = document.querySelector('input#search-box');
const div = document.querySelector('.country-info');

inputValue.addEventListener('input', debounce((e) => {
    console.log(e.target.value);

    fetchCountries('Poland')}, DEBOUNCE_DELAY)
);


function fetchCountries(name) {
       return fetch(`https://restcountries.com/v3.1/name/${name}`)
           .then(response => response.json()).then( data => {
               
               console.log('data ',data);
               console.log('data.length: ', data.length);

                if (data.length > 10) {
                    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
                   } else if (data.length >= 2 && data.length <= 10) {
                    Notiflix.Notify.info('These are 2-10 countries');
                   } else if (data.length === 1) {
                    Notiflix.Notify.success('Here is the country');
                     
                    div.insertAdjacentHTML('beforeend', markUp(data));
               }
           })
           .catch(Notiflix.Notify.failure("Oops, there is no country with that name"));
       
};


// https://restcountries.com/v3.1/all?fields=name,population,capital,languages,flags


function markUp(data) {
    
    console.log('data.flags.svg', data.map(data => data.flags.svg));
    // console.log(data.map(data => data.flags));
    
    return data.map(data => `<svg width='50' heigth='50'><use xlink:href='${data.flags.svg}'></use></svg>`)
        .join('');
                
    //     `<svg width='50' heigth='50'>
    // <use src='${data.flags.svg}'>
    // <svg>`)
    //     .join('');
    
    //   <img href='${data.flags.png}' width='100' heigth='40'>
    // <p>${data.name.official}</p>
    // <ul>
    //   <li>
    //     <p> Capital: ${data.capital}</p>
    //   </li>
    //   <li>
    //     <p> Population: ${data.population}</p>
    //   </li>
    //   <li>
    //     <p> Languages: ${data.languages}</p>
    //   </li>
    // </ul>`
        // .join('');
}
