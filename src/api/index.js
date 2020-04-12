import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let dinamycUrl = url;

  if (country!=='Global') {
    dinamycUrl = `${url}/countries/${country}`;
  }

  try {
    const response = await axios.get(dinamycUrl);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const response = await axios.get(`${url}/countries`);
    return response.data.countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
};
