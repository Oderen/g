import './css/styles.css';
const debounce = require('lodash.debounce');

import getCountry from './test';

const DEBOUNCE_DELAY = 300;

const inputValue = document.querySelector('input#search-box');

inputValue.addEventListener('input', debounce((e) => {
    console.log(e.currentTarget.value);

    getCountry('Poland')}, DEBOUNCE_DELAY)
);







