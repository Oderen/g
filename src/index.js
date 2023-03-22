import './css/styles.css';
const debounce = require('lodash.debounce');

import getCountry from './test';

const DEBOUNCE_DELAY = 300;

const inputValue = document.querySelector('input#search-box');

inputValue.addEventListener('input', (e) => {
    e.preventDefault();
    console.log(e.currentTarget.value);

    debounce(getCountry('Poland'), DEBOUNCE_DELAY);
});
 








