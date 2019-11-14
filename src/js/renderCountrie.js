import countrieListTemplate from '../templates/countrieList.hbs';
import countrieItemInfo from '../templates/renderCountryInfo.hbs';
import PNotify from '../../node_modules/pnotify/dist/es/PNotify';

export default function createList(results) {
  const resultList = document.querySelector('.result_list');

  const renderCountrieList = countrieList => {
    resultList.innerHTML = countrieListTemplate(countrieList);
  };

  const renderCountrieInfo = countrieItems => {
    resultList.innerHTML = countrieItemInfo(countrieItems);
  };

  if (results.length <= 10 && results.length > 1) {
    resultList.classList.remove('card');
    return renderCountrieList(results);
  } else if (results.length > 10) {
    PNotify.error({
      text: 'Too many matches found. Please entry a more sprcific query!',
    });
  } else if ((results.length = 1 && results.status != 404)) {
    resultList.classList.add('card');
    return renderCountrieInfo(results);
  } else {
    resultList.innerHTML = '';
  }
}
