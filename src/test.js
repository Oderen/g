export default function fetchCountries(name) {
   return fetch(`https://restcountries.com/v3.1/independent?status=true&fields=name.official,population,languages,capital`)
        .then(response => response.json())        
        .catch(error => console.log(error));
};

// https://restcountries.com/v3.1/all?fields=name.official,capital,population,flags.svg,languages

// https://restcountries.com/v3.1/independent?status=true&fields=languages,capital

// https://restcountries.com/v3.1/name/poland?fields=capital&fields=name.official&population&flags.svg&languages


// name.official - повна назва країни
// capital - столиця
// population - населення
// flags.svg - посилання на зображення прапора
// languages - масив мов