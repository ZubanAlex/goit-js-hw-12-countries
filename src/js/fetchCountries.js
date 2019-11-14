import PNotify from '../../node_modules/pnotify/dist/es/PNotify';
export default function fetchCountries(searchQuery) {
  const API_URL = 'https://restcountries.eu/rest/v2/name/';

  async function getCountrieByName(name) {
    const result = await fetch(`${API_URL}${name}`);

    if (result.ok && result.status != 404) {
      return await result.json();
    } else {
      await PNotify.error({
        text: 'You input wrong name! Try again',
      });
      return [];
    }
  }

  return getCountrieByName(searchQuery);
}
