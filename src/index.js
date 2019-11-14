import './styles.css';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';
import fetchCountries from './js/fetchCountries';
import createCountrieList from './js/renderCountrie';
import { debounce } from 'lodash';

const searchInput = document.querySelector('.search_input');

const onInputChange = async e => {
  const name = searchInput.value;
  let results = [];

  if (name) {
    const data = await fetchCountries(name);
    results = data;
  }

  createCountrieList(results);
};

searchInput.addEventListener('input', debounce(onInputChange, 5000));
