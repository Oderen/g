import Notiflix from 'notiflix';

export default class newApi {
  constructor() {
    this.a = true;
        this.inputValue = document.querySelector('input#search-box');
        this.ul = document.querySelector('.country-list');
        this.div = document.querySelector('.country-info');
  };

  fetchCountries(name) {
        this.name = name;

      fetch(`https://restcountries.com/v3.1/name/${this.name}`)
        .then(response => response.json()).then(data => this.showingCountries(data))
        .catch(this.onFailedSearch());
  };
  
  showingCountries(data) {         
    if (data.length > 10) {
            return Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
          }
          else if (data.length >= 2 && data.length <= 10) {
            return this.ul.insertAdjacentHTML('beforeend', this.markUpForTwoTenCountries(data));
          }
          else if (data.length === 1) {
            this.div.insertAdjacentHTML('beforeend', this.markUpOneCountry(data));
            document.querySelector('.list').style.listStyle = 'none';
            return;
          };
  }
  
  markUpOneCountry(data) {
    return data.map(data => `<h2>
<img width ='70' height='50' src='${data.flags.svg}'>
    ${data.name.official}</h2>
    <ul class='list'>
      <li>
        <p> <b>Capital</b>: ${data.capital}</p>
      </li>
      <li>
        <p> <b>Population</b>: ${data.population}</p>
      </li>
      <li>
        <p> <b>Languages</b>: ${Object.values(data.languages).join(', ')}</p>
      </li>
    </ul>`
    ).join('');
  };
  
  markUpForTwoTenCountries(data) {
    return data.map(data => `<h5>
    <img width ='70' height='50' src='${data.flags.svg}'>
    ${data.name.official}</h5>`).join(''); 
  };
  
  onFailedSearch() {    
    return Notiflix.Notify.failure("Oops, there is no country with that name");
  }
};
