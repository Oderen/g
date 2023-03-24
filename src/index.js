// Imports
import './css/styles.css';
var debounce = require('lodash.debounce');
import Notiflix from 'notiflix';
// import getCountry from './test';
import newApiSevice from './newApi';

// Vars
const newApi = new newApiSevice();
const DEBOUNCE_DELAY = 300;

const refs = {
    inputValue: document.querySelector('input#search-box'),
    ul: document.querySelector('.country-list'),
    div: document.querySelector('.country-info')
};

// Main

refs.inputValue.addEventListener('input', debounce((e) => {
    console.log(e.target.value);
    newApi.fetchCountries(`${e.target.value}`)}, DEBOUNCE_DELAY)
);


// let isMarkUp = true;

// const inputValue = document.querySelector('input#search-box');
// const div = document.querySelector('.country-info');

// inputValue.addEventListener('input', debounce((e) => {
//     console.log(e.target.value);

//     fetchCountries(`${e.target.value}`)}, DEBOUNCE_DELAY)
// );


// function fetchCountries(name) {
//        return fetch(`https://restcountries.com/v3.1/name/${name}`)
//            .then(response => response.json()).then(data => {
               
//                console.log(data);
               
//                 if (data.length > 10) {
//                     Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
//                    } else if (data.length >= 2 && data.length <= 10) {
//                     Notiflix.Notify.info('These are 2-10 countries');

//                     // div.insertAdjacentHTML('afterend', markUpForTwoTenCountries(data));


//                    } else if (data.length === 1) {
//                     Notiflix.Notify.success('Here is the country');
                     
//                     // if (isMarkUp) {
//                     //     console.log(true);
//                     //         div.insertAdjacentHTML('afterend', markUpOneCountry(data));
//                     //         isMarkUp = false;
//                     //     } else {
//                     //     console.log(false);
//                     //     isMarkUp = true;
//                     // }

//                     // div.appendChild(markUpOneCountry(data));
//                     div.insertAdjacentHTML('afterend', markUpOneCountry(data));
//                }
//            })
//            .catch(Notiflix.Notify.failure("Oops, there is no country with that name"));
       
// };

// function markUpOneCountry(data) {    
//     return data.map(data => `<h1>
//     <img width ='70' height='50' src='${data.flags.svg}'>
//     ${data.name.official}</h1>
//     <ul>
//       <li>
//         <p> <b>Capital</b>: ${data.capital}</p>
//       </li>
//       <li>
//         <p> <b>Population</b>: ${data.population}</p>
//       </li>
//       <li>
//         <p> <b>Languages</b>: ${Object.values(data.languages).join(', ')}</p>
//       </li>
//     </ul>`)
    
//     // const li = document.createElement('li');
//     // return li;
// };

// function markUpForTwoTenCountries(data) {
//     return data.map(data => `<h1>
//     <img width ='70' height='50' src='${data.flags.svg}'>
//     ${data.name.official}</h1>`); 
// };

