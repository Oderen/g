// Imports
import './css/styles.css';
var debounce = require('lodash.debounce');
import newApiSevice from './newApi';

// Vars
const newApi = new newApiSevice();
const DEBOUNCE_DELAY = 300;

const refs = {
    inputValue: document.querySelector('input#search-box'),
    ul: document.querySelector('.country-list'),
    div: document.querySelector('.country-info'),
};

// Main

refs.inputValue.addEventListener('input', debounce((e) => {
    refs.div.innerHTML = '';
    refs.ul.innerHTML = '';

    newApi.fetchCountries(`${e.target.value}`)}, DEBOUNCE_DELAY)
);


