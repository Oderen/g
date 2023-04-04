import Notiflix from 'notiflix';

export default class newApi {
  constructor() {
    this.a = true;
        this.inputValue = document.querySelector('input#search-box');
        this.ul = document.querySelector('.country-list');
        this.div = document.querySelector('.country-info');
  };

  async fetchCountries(name) {
    try { 
    this.name = name;

      const response = await fetch(`https://restcountries.com/v3.1/name/${this.name}?fields=name,capital,population,languages,flags`);
      const parsedResponse = await response.json();
      console.log(parsedResponse);
      return this.showingCountries(parsedResponse);

    } catch (e) {
      console.log('Problem: ', e.message);
    }
  };
  
  showingCountries(data) {         
    if (data.length > 10) {
            return Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
          }
    else if (data.length >= 2 && data.length <= 10) {
            return this.ul.insertAdjacentHTML('beforeend', this.markUpForTwoTenCountries(data));
          }
    else if (data.length === 1) {
            const markUp = this.div.insertAdjacentHTML('beforeend', this.markUpOneCountry(data));
            document.querySelector('.list').style.listStyle = 'none';
            return markUp;
    };
    return Notiflix.Notify.failure("Oops, there is no country with that name");
  };
  
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
};


