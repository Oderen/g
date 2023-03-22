export default function fetchCountries(name) {
   return fetch(`https://restcountries.com/v3.1/all?fields=name,population,capital,languages,flags`)
           .then(response => response.json())
        .catch(error => console.log(error));
};
